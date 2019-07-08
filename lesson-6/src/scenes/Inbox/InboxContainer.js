import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  lifecycle,
  withStateHandlers,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import InboxView from './InboxView';
import { productsSelectors } from '../../modules/products';
import {
  chatsOperations,
  chatsSelectors,
  chatsActions,
} from '../../modules/chats';

const mapStateToProps = (state) => ({
  isLoading: state.chats.fetchChats.isLoading,
  items: chatsSelectors.getChatsWithLastMessage(state),
  visibleOnMobile: state.chats.visibleOnMobile,
});

const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
  toggleChatVisibility: chatsActions.toggleChatVisibility,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleMobileView: (props) => () => {
      props.toggleChatVisibility();
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchChats();
      this.props.toggleChatVisibility({ visibility: false });
    },
    // componentWillUnmount() {

    // },
  }),
);

export default enhancer(InboxView);
