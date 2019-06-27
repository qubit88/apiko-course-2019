import { createSelector } from 'reselect';

const getChatsEntities = (state) => state.entities.chats;
const getUserEntities = (state) => state.entities.users;
const getIds = (state) => state.chats.items;

export const getChats = createSelector(
  [getChatsEntities, getIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

// export const getProduct = createSelector(
//   (state, id) => getProductEntities(state)[id],
//   (item) => item,
// );

// export const getProductOwner = createSelector(
//   (state, id) => {
//     const users = getUserEntities(state);
//     const products = getProductEntities(state);
//     const product = products[id];

//     if (!product) {
//       return undefined;
//     }
//     return users[product.owner || product.ownerId];
//   },
//   (item) => item,
// );
