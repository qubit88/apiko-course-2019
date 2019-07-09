import { createAsyncActions } from '@letapp/redux-actions';

export const sendMessage = createAsyncActions('chats/SEND_MESSAGE');
export const fetchMessages = createAsyncActions(
  'chats/FETCH_MESSAGES',
);

export const fetchNextMessages = createAsyncActions(
  'chats/FETCH_NEXT_MESSAGES',
);
