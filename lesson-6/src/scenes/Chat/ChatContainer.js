import { connect } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import ChatView from './ChatView';
import {
  messagesOperations,
  messagesSelectors,
} from '../../modules/messages';
import { chatsSelectors, chatsActions } from '../../modules/chats';
import { viewerSelectors } from '../../modules/viewer';

const mapStateToProps = (state, props) => ({
  isLoading: state.messages.fetchMessages.isLoading,
  chat: chatsSelectors.getChat(state, props.match.params.id),
  chatIsLoading: state.chats.fetchChats.isLoading,
});

const mapDispatchToProps = {
  // fetchMessages: messagesOperations.fetchMessages,
  sendMessage: messagesOperations.sendMessage,
  toggleChatVisibility: chatsActions.toggleChatVisibility,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withHandlers({
    sendMessage: (props) => () => {
      props.sendMessage(props.match.params.id, props.text);
      props.setText('');
    },
    handleMobileView: (props) => () => {
      props.toggleChatVisibility();
    },
  }),
  lifecycle({
    componentDidMount() {
      console.log('I remounted');
      // try {
      // if (this.props.items.length === 0) {
      // this.props.fetchMessages(this.props.match.params.id);
      // }
      // } catch (err) {}
    },
  }),
);

export default enhancer(ChatView);
