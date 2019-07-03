import { handleActions, combineActions } from '@letapp/redux-actions';
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
  liked: {
    items: [],
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
    [actions.fetchLiked.start]: (state) => ({
      ...state,
      liked: {
        ...state.liked,
        isLoading: true,
        error: null,
      },
    }),
    [actions.fetchLiked.success]: (state, action) => ({
      ...state,
      liked: {
        ...state.liked,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchLiked.error]: (state, action) => ({
      ...state,
      liked: {
        ...state.liked,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.addLike.success]: (state, { payload: { id } }) => ({
      ...state,
      liked: {
        ...state.liked,
        isLoading: false,
        items: (state.liked.items || []).concat(id),
      },
    }),
    [actions.removeLike.success]: (state, { payload: { id } }) => ({
      ...state,
      liked: {
        ...state.liked,
        isLoading: false,
        items: (state.liked.items || []).filter(
          (item) => item !== id,
        ),
      },
    }),
  },
  INITIAL_STATE,
);
