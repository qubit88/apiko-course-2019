import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import InboxView from './InboxView';
import { productsSelectors } from '../../modules/products';
import { chatsOperations, chatsSelectors } from '../../modules/chats';

const mapStateToProps = (state) => ({
  isLoading: state.chats.fetchChats.isLoading,
  items: chatsSelectors.getChatsWithLastMessage(state),
});

const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
  withRouter,
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
