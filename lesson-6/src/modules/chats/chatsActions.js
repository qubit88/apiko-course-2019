import {
  createAsyncActions,
  createAction,
} from '@letapp/redux-actions';

export const createChat = createAsyncActions('chats/CREATE_CHAT');
export const fetchChats = createAsyncActions('chats/FETCH_CHATS');
export const toggleChatVisibility = createAction(
  'chats/TOGGLE_CHAT_VISIBILITY',
);
