import * as actions from './authActions';
import Api from '../../api';

export function login(body) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login(body);

      const { user, token } = res.data;

      Api.Auth.setToken(token);
      console.log('user', user);

      dispatch(actions.login.success(user));
    } catch (err) {
      console.log(err);
      dispatch(actions.login.error({ message: err.message }));
    }
  };
}

export function register(body) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register(body);

      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(actions.register.success(user));
    } catch (err) {
      console.log(err);
      dispatch(actions.register.error({ message: err.message }));
    }
  };
}
