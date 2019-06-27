import { createAsyncActions } from '@letapp/redux-actions';

export const sendMessage = createAsyncActions('chats/SEND_MESSAGE');
export const fetchMessage = createAsyncActions(
  'chats/FETCH_MESSAGES',
);
