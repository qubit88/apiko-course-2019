import { handleActions } from '@letapp/redux-actions';
import * as actions from './authActions';

const INITIAL_STATE = {
  login: { isLoading: false, isError: false, error: null },
  register: { isLoading: false, isError: false, error: null },
  logout: { isLoading: false, isError: false, error: null },
};

export default handleActions(
  {
    [actions.login.start]: (state) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.login.success]: (state) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
      },
    }),
    [actions.login.error]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    [actions.register.start]: (state) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.register.success]: (state) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: false,
      },
    }),
    [actions.register.error]: (state, action) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.logout.start]: (state) => ({
      ...state,
      logout: {
        ...state.logout,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.logout.success]: (state) => ({
      ...state,
      register: {
        ...state.logout,
        isLoading: false,
      },
      user: null,
    }),
    [actions.logout.error]: (state, action) => ({
      ...state,
      logout: {
        ...state.logout,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
