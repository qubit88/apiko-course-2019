import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions(
  'products/FETCH_LATEST',
);

export const fetchQuery = createAsyncActions('products/FETCH_QUERY');

export const fetchProduct = createAsyncActions(
  'products/FETCH_PRODUCT',
);
