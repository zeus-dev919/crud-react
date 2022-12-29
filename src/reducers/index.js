import { combineReducers } from 'redux';
import post from './post';
import product from './product';
export default combineReducers({
  post: post,
  product: product
});
