import { createSelector } from 'reselect';

const getProductEntities = (state) => state.entities.products;
const getUserEntities = (state) => state.entities.users;
const getProductIds = (state) => state.users.products.items;

export const getProducts = createSelector(
  [getProductEntities, getProductIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getUser = createSelector(
  (state, id) => getUserEntities(state)[id],
  (user) => user,
);
