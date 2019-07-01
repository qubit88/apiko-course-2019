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
import { productsSelectors } from '../../modules/products';
import { chatsOperations } from '../../modules/chats';
import { messagesOperations } from '../../modules/messages';

const mapStateToProps = (state, { productId }) => ({
  isLoading: state.products.latest.isLoading,
  product: productsSelectors.getProduct(state, productId),
  owner: productsSelectors.getProductOwner(state, productId),
});

const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
  sendMessage: messagesOperations.sendMessage,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => async () => {
      console.log('product', props.product);
      if (!props.product.chatId) {
        try {
          await props.createChat(props.product.id);
        } catch (err) {
          console.log(err);
        }
      }
      console.log('product', props.product);
      try {
        await props.sendMessage(props.product.chatId, props.text);
        props.history.push(
          generatePath(routes.chat, {
            id: props.product.chatId,
          }),
        );
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
