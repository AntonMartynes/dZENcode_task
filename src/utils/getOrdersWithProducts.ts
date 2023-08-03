import { Order, Product, OrderWithProducts } from '../types';

export const getOrdersWithProducts = (
  orders: Order[],
  products: Product[],
): OrderWithProducts[] => {
  return orders.map((order) => ({
    ...order,
    products: products.filter(product => product.order === order.id),
  }));
};