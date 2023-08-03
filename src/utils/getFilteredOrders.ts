import { Order } from '../types';

export const getFilteredOrders = (
  orders: Order[],
  query: string,
): Order[] => {
  let filteretOrders = orders;
  const normalizedQuery = query.trim().toLowerCase();

  filteretOrders = filteretOrders.filter(
    order => order.title.toLowerCase().includes(normalizedQuery),
  );

  return filteretOrders;
};