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

const mapStateToProps = (state, props) => ({
  isLoading: state.messages.fetchMessages.isLoading,
  items: messagesSelectors.getMessages(state, props.match.params.id),
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
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchMessages(this.props.match.params.id);
    },
  }),
);

export default enhancer(ChatView);
