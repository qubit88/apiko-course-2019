import { connect } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  withProps,
} from 'recompose';
import ContactSellerModalView from './ContactSellerModalView';
import { productsSelectors } from '../../modules/products';

const mapStateToProps = (state, { productId }) => ({
  isLoading: state.products.latest.isLoading,
  product: productsSelectors.getProduct(state, productId),
  owner: productsSelectors.getProductOwner(state, productId),
});

const mapDispatchToProps = {};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => () => {
      if (!props.product.chatId) {
        //  todo create chat and send message
        //
      } else {
        //  todo send message and navigate to chat
      }
    },
  }),
  withProps((props) => ({
    disabled: props.text.trim().length === 0,
  })),
);

export default enhancer(ContactSellerModalView);
