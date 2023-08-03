import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { actions as selectedOrderActions } from '../../Redux/reducers/selectedOrderReduser';
import { actions as sideModalActions } from '../../Redux/reducers/sideModalReducer';
import { OrderWithProducts } from '../../types';
import './OrderItem.scss';
import { RootState } from '../../Redux/store';
import menuIcon from '../../images/menu.png';
import deleteIcon from '../../images/delete.png';

type Props = {
  order: OrderWithProducts;
  onDelete: () => void;
};

export const OrderItem: React.FC<Props> = ({ order, onDelete }) => {
  const { id, title, products } = order;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(selectedOrderActions.select(id));
    dispatch(sideModalActions.modalActive());
    navigate('/groups');
  };

  const isOrderPage = location.pathname !== '/groups';
  const selectedOrder = useSelector<RootState>(state => state.selectedOrder);
  const isSelectedOrder = selectedOrder === order?.id;
  const isProducts = order?.products.length < 1;

  return (
    <tr className={cn('order-item', {
      'order-item__current': isSelectedOrder && !isOrderPage,
    })}
    >
      { isOrderPage && (
        <td className="order-field">
          <h3 className="order-field__title">{ title }</h3>
        </td>
      ) }
      <td className="order-field">
        <button
          type="button"
          className="order-field__menu-button"
          disabled={isProducts}
          onClick={handleMenuClick}
        >
          <img
            src={menuIcon}
            height="15px"
            alt="mune button"
          />
        </button>
      </td>

      <td className="order-field">
        <div className="order-field__total-products">
          {products?.length}
          <br />
          Products
        </div>
      </td>
      <td className="order-field">
        <div className="order-field__dates">
          <div className="order-field__dates__short-date">
            {moment(new Date()).format('DD/MM')}
          </div>
          <div className="order-field__dates__full-date">
            {moment(new Date()).format('DD/MMM/YYYY')}
          </div>
        </div>
      </td>
      {!isOrderPage && (
        <td className="order-field">
          <div className={cn('order-item', {
            order__current: isSelectedOrder && !isOrderPage,
          })}
          >
          </div>
        </td>
      )}
      {isOrderPage && (
        <td className="order-field">
          <div className="order-field__price">
            <div className="order-field__price__usd">2500 $</div>
            <div className="order-field__price__uah">250 000.50 uah</div>
          </div>
        </td>
      ) }
      { isOrderPage && (
        <td className="order-field">
          <button
            type="button"
            className="order-field__delete-btn"
            onClick={onDelete}
          >
            <img
              src={deleteIcon}
              width="17px"
              alt="delete icon"
            />
          </button>
        </td>
      ) }
    </tr>
  );
};