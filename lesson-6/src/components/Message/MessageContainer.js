import { connect } from 'react-redux';
import Message from './Message';
import { viewerSelectors } from '../../modules/viewer';

const mapStateToProps = (state) => ({
  user: viewerSelectors.getUser(state),
});

export default connect(mapStateToProps)(Message);
