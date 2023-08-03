import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import getSymbolFromCurrency from 'currency-symbol-map';
import cn from 'classnames';
import { RootState } from '../../Redux/store';
import { Product } from '../../types';
import { getCurrentOrder } from '../../utils';
import './ProductItem.scss';
import monitor from '../../images/desktop.png';
import deleteIcon from '../../images/delete.png';

type Props = {
  products: Product;
  onDelete: () => void;
};

export const ProductItem: React.FC<Props> = ({ products, onDelete }) => {
  const {
    id,
    title,
    serialNumber,
    isNew,
    guarantee,
    price,
    date,
  } = products;
  const orders = useSelector<RootState>(state => state.order) as [];

  const isRepair = false;
  const isBrendNew = isNew === 1;

  const currentOrder = getCurrentOrder(orders, id);

  const location = useLocation();
  const isProductPage = location.pathname !== '/groups';

  return (
    <tr className="product-item">
      <td className="product-field">
        <div className="product-field__status"></div>
      </td>
      <td className="product-field">
        <div className="product-field__image">
          <img
            src={monitor}
            width="30px"
            alt="product_image"
          />
        </div>
      </td>
      <td className="product-field">
        <div className="product-field__product-details">
          <span className="product-field__product-name">{title}</span>
          <span className="product-field__product-sn">{serialNumber}</span>
        </div>

      </td>
      <td className="product-field">
        <span className="product-field__service-status">
          {isRepair
            ? 'In service'
            : 'Done'}
        </span>
      </td>
      { isProductPage && (
        <td className="product-field">
          <div className="product-field__quarantee">
            <div className="product-field__quarantee-field">
              <span className="product-field__quarantee-field-text">from</span>
              <span className="product-field__quarantee-field-date">
                {moment(guarantee.start).format('DD/MMM/YYYY')}
              </span>
            </div>
            <div className="product-field__quarantee-field">
              <span className="product-field__quarantee-field-text">to</span>
              <span className="product-field__quarantee-field-date">
                {moment(guarantee.end).format('DD/MMM/YYYY')}
              </span>
            </div>
          </div>
        </td>
      )}
      { isProductPage && (
        <td className="product-field">
          <span className="product-field__condition">
            {isBrendNew
              ? 'New'
              : 'Used'}
          </span>
        </td>
      )}
      { isProductPage && (
        <td className="product-field">
          <div className="product-field__price">
            {
              price.map(({ value, symbol, isDefault }) => (
                <div
                  key={symbol}
                  className={cn('product-field__price-item', {
                    'product-field__price-item--default': isDefault !== 1,
                  })}
                >
                  <span>{value}</span>
                  <span>{getSymbolFromCurrency(symbol)}</span>
                </div>
              ))
            }
          </div>
        </td>
      )}
      { isProductPage && (
        <td className="product-field">
          <div className="product-field__group-name">
            groupe name
          </div>
        </td>
      )}
      { isProductPage && (
        <td className="product-field">
          <div className="product-field__order-name">
            {currentOrder?.title}
          </div>
        </td>
      )}
      { isProductPage && (
        <td className="product-field">
          <div className="product-field__date-container">
            <div className="product-field__date">
              {moment(date).format('DD/MM')}
            </div>
            <div className="product-field__date--defult">
              {moment(date).format('DD/MMM/YYYY')}
            </div>
          </div>
        </td>
      )}
      <td className="product-field">
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src={deleteIcon}
            height="15px"
            alt="delete icon"
          />
        </button>
      </td>
    </tr>
  );
};