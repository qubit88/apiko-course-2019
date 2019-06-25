import { handleActions } from '@letapp/redux-actions';
import * as actions from './usersActions';

const INITIAL_STATE = {
  user: {
    isLoading: false,
    isError: false,
    error: null,
  },
  products: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
};
export default handleActions(
  {
    [actions.fetchUserProducts.start]: (state) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: true,
        error: null,
      },
    }),
    [actions.fetchUserProducts.success]: (state, action) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchUserProducts.error]: (state, action) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchUser.start]: (state) => ({
      ...state,
      user: {
        ...state.user,
        isLoading: true,
        error: null,
      },
    }),
    [actions.fetchUser.success]: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        isLoading: false,
      },
    }),
    [actions.fetchUser.error]: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
