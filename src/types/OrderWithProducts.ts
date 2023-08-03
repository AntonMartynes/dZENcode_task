import { Order } from './Order';
import { Product } from './Product';

export interface OrderWithProducts extends Order {
  products: Product[];
}