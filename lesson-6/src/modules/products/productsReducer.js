import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  searchedProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  product: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        error: null,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchQuery.start]: (state) => ({
      ...state,
      searchedProducts: {
        ...state.searchedProducts,
        isLoading: true,
        error: null,
      },
    }),
    [actions.fetchQuery.success]: (state, action) => ({
      ...state,
      searchedProducts: {
        ...state.searchedProducts,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchQuery.error]: (state, action) => ({
      ...state,
      searchedProducts: {
        ...state.searchedProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
        error: null,
      },
    }),
    [actions.fetchProduct.success]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
