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
import { viewerSelectors } from '../../modules/viewer';

const mapStateToProps = (state, props) => ({
  isLoading: state.messages.fetchMessages.isLoading,
  items: messagesSelectors.getMessages(state, props.match.params.id),
  user: viewerSelectors.getUser(state),
});

const mapDispatchToProps = {
  fetchMessages: messagesOperations.fetchMessages,
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
    sendMessage: (props) => () => {
      props.sendMessage(props.match.params.id, props.text);
      props.setText('');
    },
  }),
  lifecycle({
    componentDidMount() {
      // try {
      if (this.props.items.length === 0) {
        this.props.fetchMessages(this.props.match.params.id);
      }
      // } catch (err) {}
    },
  }),
);

export default enhancer(ChatView);
