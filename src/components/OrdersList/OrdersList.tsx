import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as orderActions } from '../../Redux/reducers/orderReducer';
import { OrderWithProducts } from '../../types/OrderWithProducts';
import { OrderItem } from '../OrderItem';
import { Modal } from '../Modal';
import { getCurrentOrder } from '../../utils';
import deleteIcon from '../../images/delete.png';
import cn from 'classnames';
import './OrdersList.scss';
import { RootState } from '../../Redux/store';
import { motion } from "framer-motion"

type Props = {
  orders: OrderWithProducts[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  const dispatch = useDispatch();

  const isModalActive = useSelector<RootState>(state => state.isModalActive);
  console.log({isModalActive})


  const handleDeleteOrder = (orderId: number) => {
    setActiveModal(true);
    setIdToDelete(orderId);
  };

  const orderToDelete = getCurrentOrder(orders, idToDelete);

  console.log(activeModal);

  return (
    <>
      <motion.table 
        className={cn(isModalActive ? 'ordersList__activeModal' : 'ordersList')}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <tbody>
          {orders.map(order => (
            <OrderItem
              key={order.id}
              order={order}
              onDelete={() => handleDeleteOrder(order.id)}
            />
          ))}
        </tbody>
      </motion.table>

      {activeModal && (
        <Modal onClose={() => setActiveModal(false)}>
          <div className="modal__content-wrapper">
            <div className="item-to-delete">
              <h1 className="item-to-delete__order-name">
                {orderToDelete?.title}
              </h1>
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
                dispatch(orderActions.remove(idToDelete));
              }}
            >
              <img
                src={deleteIcon}
                height="10px"
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

