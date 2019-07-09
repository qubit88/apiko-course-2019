import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions(
  'products/FETCH_LATEST',
);

export const fetchMoreLatest = createAsyncActions(
  'products/FETCH_LATEST',
);

export const fetchLiked = createAsyncActions('products/FETCH_LIKED');
export const addLike = createAsyncActions('products/ADD_LIKE');
export const removeLike = createAsyncActions('products/REMOVE_LIKE');

export const fetchQuery = createAsyncActions('products/FETCH_QUERY');

export const fetchProduct = createAsyncActions(
  'products/FETCH_PRODUCT',
);
