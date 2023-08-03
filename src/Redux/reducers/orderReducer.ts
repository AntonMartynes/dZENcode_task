import { orders } from '../../api/app';
import { Order } from '../../types';

const initialState: Order[] = orders;

type AddAction = {
  type: 'order/ADD',
  payload: Order
};

type UpdateAction = {
  type: 'order/UPDATE',
  payload: Order
};

type DeleteAction = {
  type: 'order/DELETE',
  payload: number
};

type Action = AddAction | UpdateAction | DeleteAction;

const add = (value: Order): AddAction => ({
  type: 'order/ADD',
  payload: value,
});

const update = (value: Order): UpdateAction => ({
  type: 'order/UPDATE',
  payload: value,
});

const remove = (value: number): DeleteAction => ({
  type: 'order/DELETE',
  payload: value,
});

export const actions = { add, update, remove };

const orderReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'order/ADD':
      return [...state, action.payload];

    case 'order/UPDATE':
      return state.map((order) => (
        order.id === action.payload.id
          ? action.payload
          : order
      ));

    case 'order/DELETE':
      return state.filter((order) => order.id !== action.payload);

    default:
      return state;
  }
};

export default orderReducer;