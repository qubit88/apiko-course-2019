import Api, { schemas } from '../../api';
import { normalize } from 'normalizr';
import * as actions from './usersActions';

export function fetchUserProducts(id) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchUserProducts.start());

      const res = await Api.Users.getProducts(id);

      const { result, entities } = normalize(
        res.data.list,
        schemas.ProductList,
      );
      console.log({ entities });
      dispatch(
        actions.fetchUserProducts.success({ result, entities }),
      );
    } catch (err) {
      dispatch(
        actions.fetchUserProducts.error({ message: err.message }),
      );
    }
  };
}

export function fetchUser(id) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchUser.start());

      const res = await Api.Users.get(id);

      const { entities } = normalize(res.data, schemas.User);

      dispatch(actions.fetchUser.success({ entities }));
    } catch (err) {
      dispatch(actions.fetchUser.error({ message: err.message }));
    }
  };
}
