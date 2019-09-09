import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from 'redux/user/User.Reducer';
import cartReducer from 'redux/cart/Cart.Reducer';
import directoryReducer from 'redux/directory/Directory.Reducer';
import shopReducer from 'redux/shop/Shop.Reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
