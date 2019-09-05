import { CartActionTypes } from './Cart.Types';

const initialState = {
  hidden: false
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default cartReducer;
