import { handleActions } from '@letapp/redux-actions';
import * as actions from './messagesActions';

const INITIAL_STATE = {
  items: {
    // [chatId]: []
  },
  sendMessage: {
    isLoading: false,
    isError: false,
    error: null,
  },
  fetchMessages: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.sendMessage.start]: (
      state,
      { payload: { chatId, result } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: (state.items[chatId] || []).concat(result),
      },
      sendMessage: {
        ...state.sendMessage,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.sendMessage.success]: (
      state,
      { payload: { chatId, result, oldMessageId } },
    ) => {
      const items = state.items[chatId]
        .filter((i) => i !== oldMessageId)
        .concat(result);

      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: items,
        },
        sendMessage: {
          ...state.sendMessage,
          isLoading: false,
          error: null,
          isError: false,
        },
      };
    },
    [actions.sendMessage.error]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchMessages.start]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetch,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchMessages.success]: (
      state,
      { payload: { chatId, result } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: result.reverse(),
      },
      fetchMessages: {
        ...state.fetch,
        isLoading: false,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetch,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
