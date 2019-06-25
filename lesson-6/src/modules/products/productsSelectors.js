import { createSelector } from 'reselct';

const getProductEntities = (state) => state.enitites.products;
const getLatestIds = (state) => state.products.latest.items;

export const getLatest = createSelector(
  [getProductEntities, getLatestIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
