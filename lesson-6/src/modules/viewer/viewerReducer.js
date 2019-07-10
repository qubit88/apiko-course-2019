import { handleActions, combineActions } from '@letapp/redux-actions';
import * as authActions from '../auth/authActions';
import * as actions from './viewerActions';

const INITIAL_STATE = {
  fetchViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  editViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [authActions.logout.success]: (state) => ({
      ...state,
      user: null,
    }),
    [actions.fetchViewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
        error: null,
      },
    }),
    [combineActions(
      actions.fetchViewer.success,
      authActions.login.success,
      authActions.register.success,
    )]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.fetchViewer.error]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchViewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
        error: null,
      },
    }),
    [actions.editViewer.success]: (state, action) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.editViewer.error]: (state, action) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
