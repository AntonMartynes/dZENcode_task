import { Product } from '../types';

export const getCurrentProduct = (
  products: Product[],
  productId: number,
) => {
  return products.find((product) => product.id === productId);
};