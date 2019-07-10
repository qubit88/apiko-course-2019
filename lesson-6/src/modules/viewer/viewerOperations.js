import * as actions from './viewerActions';
import Api from '../../api';

export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const res = await Api.Viewer.get();
      dispatch(actions.fetchViewer.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}

export function editViewer(body) {
  return async function editViewerThunk(dispatch) {
    try {
      dispatch(actions.editViewer.start());

      const res = await Api.Viewer.editProfile(body);
      dispatch(actions.editViewer.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.editViewer.error({ message: err.message }));
    }
  };
}
