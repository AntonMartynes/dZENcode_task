import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { actions as productActions } from '../../Redux/reducers/productReducer';
import { RootState } from '../../Redux/store';
import { getFilteredProducts } from '../../utils';
import { getCurrentProduct } from '../../utils/getCurrentProduct';
import { Modal } from '../Modal';
import { ProductItem } from '../ProductItem';
import './ProductList.scss';
import monitor from '../../images/desktop.png';
import deleteIcon from '../../images/delete.png';

export const ProductList: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const dispatch = useDispatch();

  const handleDeleteProduct = (productId: number) => {
    setActiveModal(true);
    setIdToDelete(productId);
  };

  const products = useSelector<RootState>(state => state.product) as [];
  const [searchParams] = useSearchParams();

  const type = searchParams.get('type') || '';
  const specification = searchParams.get('specification') || '';
  const query = searchParams.get('query') || '';

  const filteredProducts = getFilteredProducts(
    products,
    type,
    specification,
    query,
  );

  const itemToDelete = getCurrentProduct(filteredProducts, idToDelete);

  return (
    <>
      <table className="product-list">
        <tbody>
          {filteredProducts.map(product => (
            <ProductItem
              key={product.id}
              products={product}
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
        </tbody>
      </table>
      {!filteredProducts && (
        <p>Oooooh, there is no product that you are looking…</p>
      )}
      {activeModal && (
        <Modal onClose={() => setActiveModal(false)}>
          <div className="modal__content-wrapper">
            <div className="item-to-delete">
              <div className="item-to-delete__status"></div>
              <div className="item-to-delete__image">
                <img
                  src={monitor}
                  width="30px"
                  alt="product_image"
                />
              </div>
              <div className="item-to-delete__details">
                <span className="item-to-delete__name">{itemToDelete?.title}</span>
                <span className="item-to-delete__product-sn">{itemToDelete?.serialNumber}</span>
              </div>
            </div>
          </div>
          <div className="modal__button-container">
            <button
              className="modal__button modal__button--cancel"
              type="button"
              onClick={() => {
                setActiveModal(false);
              }}
            >
              cancel
            </button>
            <button
              className="modal__button modal__button--delete"
              type="button"
              onClick={() => {
                setActiveModal(false);
                dispatch(productActions.remove(idToDelete));
              }}
            >
              <img
                src={deleteIcon}
                height="11px"
                alt="delete icon"
              />
              {' '}
              delete
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};