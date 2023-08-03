import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { OrdersList } from '../../components/OrdersList';
import { TitlePageInfo } from '../../components/TitlePageInfo';
import { RootState } from '../../Redux/store';
import { getFilteredOrders, getOrdersWithProducts } from '../../utils';

import plusIcon from '../../images/plus.png';
import './Orders.scss';

export const Orders: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const orders = useSelector<RootState>(state => state.order) as [];
  const products = useSelector<RootState>(state => state.product) as [];

  const filteredOrders = getFilteredOrders(orders, query);
  const ordersWithProducts = getOrdersWithProducts(filteredOrders, products);
  const isLooking = ordersWithProducts.length < 1;


  return (
    <div className="orders">
      <div className="orders-info">
        <div className="addOrderBtn">
          <img src={plusIcon} alt="plus-button" />
        </div>
        <TitlePageInfo name="Orders" count={orders.length} />
      </div>
      <OrdersList orders={ordersWithProducts} />
      {isLooking && (
        <p>Sorry, nothing was found!</p>
      )}
    </div>
  );
};