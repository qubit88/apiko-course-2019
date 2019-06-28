import * as actions from './messagesActions';
import { normalize } from 'normalizr';
import Api, { schemas } from '../../api';

export function sendMessage(chatId, text) {
  return async function sendMessageThunk(dispatch) {
    try {
      dispatch(actions.sendMessage.start());

      const res = await Api.Messages.sendMessage(chatId, text);

      const { result, entities } = normalize(
        res.data,
        schemas.Message,
      );
      //   TODO: fetch user
      dispatch(
        actions.sendMessage.success({ chatId, result, entities }),
      );
    } catch (err) {
      dispatch(actions.sendMessage.error({ message: err.message }));
    }
  };
}

export function fetchMessages(chatId) {
  return async function fetchThunk(dispatch) {
    try {
      dispatch(actions.fetchMessages.start());

      const res = await Api.Messages.fetchMessages(chatId);

      const { result, entities } = normalize(
        res.data,
        schemas.MessageCollection,
      );
      //   TODO: fetch user
      dispatch(
        actions.fetchMessages.success({ result, entities, chatId }),
      );
    } catch (err) {
      dispatch(actions.fetchMessages.error({ message: err.message }));
    }
  };
}
