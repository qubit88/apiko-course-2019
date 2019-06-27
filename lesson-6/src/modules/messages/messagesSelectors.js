import { createSelector } from 'reselect';

const getMessagesEntities = (state) => state.entities.messages;
const getUserEntities = (state) => state.entities.users;
const getIds = (state, chatId) => state.messages.items[chatId] || [];

export const getMessages = createSelector(
  [getMessagesEntities, getIds],
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
