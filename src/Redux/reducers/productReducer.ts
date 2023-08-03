import { products } from '../../api/app';
import { Product } from '../../types';

const initialState: Product[] = products;

type AddProductAction = {
  type: 'product/ADD',
  payload: Product,
};

type UpdateProductAction = {
  type: 'product/UPDATE',
  payload: Product,
};

type DeleteProductAction = {
  type: 'product/DELETE',
  payload: number,
};

type Action = AddProductAction | UpdateProductAction | DeleteProductAction;

const add = (value: Product): AddProductAction => ({
  type: 'product/ADD',
  payload: value,
});

const update = (value: Product): UpdateProductAction => ({
  type: 'product/UPDATE',
  payload: value,
});

const remove = (value: number): DeleteProductAction => ({
  type: 'product/DELETE',
  payload: value,
});

export const actions = { add, update, remove };

const ProductReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'product/ADD':
      return [...state, action.payload];

    case 'product/UPDATE':
      return state.map((product) => (
        product.id === action.payload.id
          ? action.payload
          : product
      ));

    case 'product/DELETE':
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
};

export default ProductReducer;