import { handleActions, combineActions } from '@letapp/redux-actions';
import { messagesActions } from '../messages/';
import { chatsActions } from '../chats/';

const INITIAL_STATE = {
  products: {
    // [id]: {
    //     product
    // }
  },

  users: {
    // [id]: {
    //     user
    // }
  },

  chats: {
    // [id]: {
    //     chat
    // }
  },

  messages: {
    // [id]: {
    //     message
    // }
  },
};

const reducer = handleActions(
  {
    [combineActions(
      messagesActions.sendMessage.start,
      messagesActions.sendMessage.success,
    )]: (state, { payload: { chatId, result } }) => ({
      ...state,
      chats: {
        ...state.chats,
        [chatId]: {
          ...state.chats[chatId],
          lastMessage: result,
        },
      },
    }),
    [chatsActions.createChat.success]: (
      state,
      { payload: { result, productId } },
    ) => {
      return {
        ...state,
        products: {
          ...state.products,
          [productId]: {
            ...state.products[productId],
            chatId: result,
          },
        },
      };
    },
    // [messagesActions.fetchMessages.success]: (
    //   state,
    //   { payload: { chatId, result } },
    // ) => ({
    //   ...state,
    //   chats: {
    //     ...state.chats,
    //     [chatId]: {
    //       ...state.chats[chatId],
    //       lastMessage: result[0],
    //     },
    //   },
    // }),
  },
  INITIAL_STATE,
);

export default function entitiesReducer(
  state = INITIAL_STATE,
  action,
) {
  let stateWithEntities = state;

  if (action.payload && action.payload.entities) {
    debugger;
    console.log('In entity');
    stateWithEntities = Object.keys(action.payload.entities).reduce(
      (accState, key) => {
        const entity = accState[key];

        accState[key] = Object.assign(
          {},
          entity,
          action.payload.entities[key],
        );

        return accState;
      },
      { ...state },
    );
  }

  return reducer(stateWithEntities, action);
}
