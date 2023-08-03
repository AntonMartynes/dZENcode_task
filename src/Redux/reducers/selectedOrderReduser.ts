const initialState = null;

type SelectAction = {
  type: 'order/SELECT';
  payload: number;
};

type UnselectAction = {
  type: 'order/unselect';
};

type Action = SelectAction | UnselectAction;

const select = (value: number) => ({
  type: 'order/SELECT',
  payload: value,
});

const unselect = () => ({
  type: 'order/unselect',
});

export const actions = { select, unselect };

const selectedOrderReduser = (selectedOrder = initialState, action: Action) => {
  switch (action.type) {
    case 'order/SELECT':
      return action.payload;

    case 'order/unselect':
      return initialState;

    default:
      return selectedOrder;
  }
};

export default selectedOrderReduser;