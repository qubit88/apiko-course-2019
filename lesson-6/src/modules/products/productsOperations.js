import * as actions from './productsActions';
import Api, { schemas } from '../../api';
import { normalize } from 'normalizr';
import * as productsSelectors from './productsSelectors';

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

export function fetchLiked() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchLiked.start());

      const res = await Api.Products.getLiked();

      const { result, entities } = normalize(res.data, schemas.Liked);

      dispatch(actions.fetchLiked.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchLiked.error({ message: err.message }));
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

export function addLike(id) {
  return async function initThunk(dispatch, getState) {
    const product = productsSelectors.getProduct(getState(), id);
    const likedProduct = { ...product, saved: true };

    try {
      dispatch(actions.addLike.start());

      const { status } = await Api.Products.like(id);

      if (status === 200) {
        dispatch(
          actions.addLike.success({
            id,
            ...normalize(likedProduct, schemas.Product),
          }),
        );
      }
    } catch (err) {
      dispatch(actions.addLike.error({ message: err.message }));
    }
  };
}

export function removeLike(id) {
  return async function initThunk(dispatch, getState) {
    const product = productsSelectors.getProduct(getState(), id);
    const likedProduct = { ...product, saved: false };

    try {
      dispatch(actions.removeLike.start());

      const { status } = await Api.Products.unLike(id);

      if (status === 200) {
        dispatch(
          actions.removeLike.success({
            id,
            ...normalize(likedProduct, schemas.Product),
          }),
        );
      }
    } catch (err) {
      dispatch(actions.removeLike.error({ message: err.message }));
    }
  };
}
