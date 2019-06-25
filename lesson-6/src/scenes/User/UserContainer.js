import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import UserView from './UserView';

import { usersOperations, usersSelectors } from '../../modules/users';

const mapStateToProps = (state, props) => ({
  user: usersSelectors.getUser(state, props.match.params.id),
  products: usersSelectors.getProducts(state),
  isLoading: state.users.user.isLoading,
});

const mapDispatchToProps = {
  fetchUser: usersOperations.fetchUser,
  fetchUserProducts: usersOperations.fetchUserProducts,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.user) {
        this.props.fetchUser(this.props.match.params.id);
      }
      if (this.props.products.length === 0) {
        this.props.fetchUserProducts(this.props.match.params.id);
      }
    },
  }),
);

export default enhancer(UserView);
