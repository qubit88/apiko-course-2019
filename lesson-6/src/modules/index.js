import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';
import users from './users';
import entities from './entities';

export default combineReducers({
  app,
  auth,
  viewer,
  products,
  users,
  entities,
});
