import { combineReducers } from 'redux';
import userReducer from 'redux/user/User.Reducer';
import cartReducer from 'redux/cart/Cart.Reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
