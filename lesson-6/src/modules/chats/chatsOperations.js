import * as actions from './chatsActions';
import { normalize } from 'normalizr';
import Api, { schemas } from '../../api';

export function createChat(productId) {
  return async function createChatThunk(dispatch) {
    try {
      dispatch(actions.createChat.start());

      const res = await Api.Chats.createChat(productId);

      const { result, entities } = normalize(res.sata, schemas.Chat);
      //   TODO: fetch user
      dispatch(actions.createChat.success({ result, entities }));
    } catch (err) {
      dispatch(actions.createChat.error({ message: err.message }));
    }
  };
}

export function fetchChats() {
  return async function fetchThunk(dispatch) {
    try {
      dispatch(actions.fetchChats.start());

      const res = await Api.Chats.fetch();

      const { result, entities } = normalize(
        res.sata,
        schemas.ChatCollection,
      );
      //   TODO: fetch user
      dispatch(actions.fetchChats.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchChats.error({ message: err.message }));
    }
  };
}
