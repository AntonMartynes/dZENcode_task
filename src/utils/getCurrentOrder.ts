import { Order } from '../types';

export const getCurrentOrder = (
  orders: Order[],
  orderId: number,
) => {
  return orders.find((order) => order.id === orderId);
};