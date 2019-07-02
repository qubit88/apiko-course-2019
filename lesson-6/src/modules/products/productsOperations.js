import * as actions from './productsActions';
import Api, { schemas } from '../../api';
import { normalize } from 'normalizr';

export function fetchLatest() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api.Products.getLatest();

      const { result, entities } = normalize(
        res.data,
        schemas.ProductList,
      );

      dispatch(actions.fetchLatest.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchLatest.error({ message: err.message }));
    }
  };
}

export function fetchQuery(query) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchQuery.start());

      const res = await Api.Products.getQuery(query);

      const { result, entities } = normalize(
        res.data,
        schemas.ProductList,
      );

      dispatch(actions.fetchQuery.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchQuery.error({ message: err.message }));
    }
  };
}

export function fetchProduct(id) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchProduct.start());

      const res = await Api.Products.get(id);

      const { entities } = normalize(res.data, schemas.Product);

      dispatch(actions.fetchProduct.success({ entities }));
    } catch (err) {
      dispatch(actions.fetchProduct.error({ message: err.message }));
    }
  };
}
