import { createSelector } from 'reselect';

const getMessagesEntities = (state) => state.entities.messages;
const getUserEntities = (state) => state.entities.users;
const getIds = (state, chatId) => state.messages.items[chatId] || [];

export const getMessages = createSelector(
  [getMessagesEntities, getIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getLastMessageId = (state, chatId) =>
  state.messages.items[chatId][0];
