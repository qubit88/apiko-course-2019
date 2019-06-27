import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatsActions';

const INITIAL_STATE = {
  items: [],
  createChat: {
    isLoading: false,
    isError: false,
    error: null,
  },
  fetchChats: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.createChat.start]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.createChat.success]: (state, action) => ({
      ...state,
      items: [action.payload.result].concat(state.items),
      createChat: {
        ...state.createChat,
        isLoading: false,
        error: null,
        isError: false,
      },
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchChats.start]: (state) => ({
      ...state,
      fetchChats: {
        ...state.fetch,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchChats.success]: (state, action) => ({
      ...state,
      items: action.payload.result,
      fetchChats: {
        ...state.fetch,
        isLoading: false,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchChats.error]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetch,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
