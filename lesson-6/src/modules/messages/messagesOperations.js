import * as actions from './messagesActions';
import { normalize } from 'normalizr';
import Api, { schemas } from '../../api';
import { viewerSelectors } from '../viewer';
import { messagesSelectors } from '../messages';
import { createMessage } from './messagesCreators';

export function sendMessage(chatId, text) {
  return async function sendMessageThunk(dispatch, getState) {
    const user = viewerSelectors.getUser(getState());
    const message = createMessage({ chatId, text, ownerId: user.id });

    try {
      dispatch(
        actions.sendMessage.start({
          chatId,
          ...normalize(message, schemas.Message),
        }),
      );

      const res = await Api.Messages.sendMessage(chatId, text);

      const { result, entities } = normalize(
        res.data,
        schemas.Message,
      );

      dispatch(
        actions.sendMessage.success({
          oldMessageId: message.id,
          chatId,
          result,
          entities,
        }),
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
      dispatch(
        actions.fetchMessages.success({ result, entities, chatId }),
      );
    } catch (err) {
      dispatch(actions.fetchMessages.error({ message: err.message }));
    }
  };
}

export function fetchNextMessages(chatId) {
  return async function fetchNextThunk(dispatch, getState) {
    const from = messagesSelectors.getLastMessageId(
      getState(),
      chatId,
    );
    try {
      dispatch(actions.fetchNextMessages.start());

      const res = await Api.Messages.fetchNextMessages(chatId, from);

      const { result, entities } = normalize(
        res.data,
        schemas.MessageCollection,
      );
      dispatch(
        actions.fetchNextMessages.success({
          result,
          entities,
          chatId,
        }),
      );
    } catch (err) {
      dispatch(
        actions.fetchNextMessages.error({ message: err.message }),
      );
    }
  };
}

export function handleMessageRealtime(evt) {
  return async function handleMessageRealtimeThunk(dispatch) {
    if (evt.type === 'ADD') {
      dispatch(addMessage(evt.message));
    }
  };
}

export function addMessage(message) {
  return async function addMessageThunk(dispatch) {
    dispatch(
      actions.sendMessage.start({
        chatId: message.chatId,
        ...normalize(message, schemas.Message),
      }),
    );
  };
}
