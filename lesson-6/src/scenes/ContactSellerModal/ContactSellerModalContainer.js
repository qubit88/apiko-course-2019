import { connect } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  withProps,
} from 'recompose';
import { withRouter, generatePath } from 'react-router-dom';
import { routes } from '../router';
import ContactSellerModalView from './ContactSellerModalView';
import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import Api from '../../api';
import { chatsOperations } from '../../modules/chats';
import { messagesOperations } from '../../modules/messages';

const mapStateToProps = (state, { productId }) => ({
  isLoading: state.products.latest.isLoading,
  owner: productsSelectors.getProductOwner(state, productId),
  product: productsSelectors.getProduct(state, productId),
});

const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
  sendMessage: messagesOperations.sendMessage,
  addChat: chatsOperations.addChat,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withHandlers({
    submit: ({
      productId,
      chatId,
      text,
      addChat,
      history,
      sendMessage,
      product,
    }) => async () => {
      if (!chatId) {
        const res = await Api.Products.get(productId);
        chatId = res.data.chatId;
      }

      if (!chatId) {
        try {
          const res = await Api.Chats.createChat(productId);

          chatId = res.data.id;
          addChat(res.data, product);
        } catch (err) {
          console.log(err);
        }
      }
      try {
        await sendMessage(chatId, text);
        // history.push(
        //   generatePath(routes.chat, {
        //     id: chatId,
        //   }),
        // );
        history.push(routes.inbox);
      } catch (err) {
        console.log(err);
      }
    },
  }),
  withProps((props) => ({
    disabled: props.text.trim().length === 0,
  })),
);

export default enhancer(ContactSellerModalView);
