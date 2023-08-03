const initialState = false;

type ModalActive = {
  type: 'modal/ACTIVE';
};

type ModalDisable = {
  type: 'modal/DISABLE';
};

type Action = ModalActive | ModalDisable;

const modalActive = () => ({
  type: 'modal/ACTIVE',
});

const modalDisable = () => ({
  type: 'modal/DISABLE',
});

export const actions = { modalActive, modalDisable };

const isModalActiveReducer = (isActive = initialState, action: Action) => {
  switch (action.type) {
    case 'modal/ACTIVE':
      return true;

    case 'modal/DISABLE':
      return false;

    default:
      return isActive;
  }
};

export default isModalActiveReducer;