import { connect } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
} from 'recompose';
import InboxView from './InboxView';
import { productsSelectors } from '../../modules/products';
import { chatsOperations, chatsSelectors } from '../../modules/chats';

const mapStateToProps = (state) => ({
  isLoading: state.chats.fetchChats.isLoading,
  items: chatsSelectors.getChats(state),
});

const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({}),
  lifecycle({
    componentDidMount() {
      this.props.fetchChats();
    },
  }),
);

export default enhancer(InboxView);
