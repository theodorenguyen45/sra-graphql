import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from 'redux/user/UserReducer';
import cartReducer from 'redux/cart/CartReducer';
import directoryReducer from 'redux/directory/DirectoryReducer';
import shopReducer from 'redux/shop/ShopReducer';

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
