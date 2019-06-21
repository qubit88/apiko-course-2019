import * as actions from './appActions';
import Api from '../../api';
import { viewerOperations } from '../viewer';

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());

      // await new Promise((res) => setTimeout(res, 1000));

      Api.init();

      await dispatch(viewerOperations.fetchViewer());

      //   TODO: fetch user
      dispatch(actions.initialization.success());
    } catch (err) {
      dispatch(
        actions.initialization.error({ message: err.message }),
      );
    }
  };
}
