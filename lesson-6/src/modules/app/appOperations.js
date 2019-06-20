import * as actions from './appActions';
import Api from '../../api';

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());

      await new Promise((res) => setTimeout(res, 1000));
      // const res = await Api.();

      Api.init();

      //   TODO: fetch user
      dispatch(actions.initialization.success());
    } catch (err) {
      dispatch(
        actions.initialization.error({ message: err.message }),
      );
    }
  };
}
