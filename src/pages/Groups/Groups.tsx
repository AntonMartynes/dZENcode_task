import React from 'react';
import { useSelector } from 'react-redux';
import { GroupsSidePopup } from '../../components/GroupsSidePopup';
import { OrdersList } from '../../components/OrdersList';
import { TitlePageInfo } from '../../components/TitlePageInfo';
import './Groups.scss';
import { RootState } from '../../Redux/store';
import { getOrdersWithProducts } from '../../utils';

export const Groups: React.FC = () => {
  const orders = useSelector<RootState>(state => state.order) as [];
  const products = useSelector<RootState>(state => state.product) as [];
  const selectedOrder = useSelector<RootState>(state => state?.selectedOrder);
  const ordersWithProducts = getOrdersWithProducts(orders, products);
  const currentOrder = ordersWithProducts.find(order => order.id === selectedOrder);

  return (
    <div className="group">
      <TitlePageInfo name="Orders" count={orders?.length} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <OrdersList orders={ordersWithProducts} />
        {selectedOrder ? <GroupsSidePopup order={currentOrder} /> : <p></p>}
      </div>
    </div>
  );
};