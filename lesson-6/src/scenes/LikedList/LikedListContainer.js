import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import LikedListView from './LikedListView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  list: productsSelectors.getLiked(state),
  isLoading: state.products.liked.isLoading,
});

const mapDispatchToProps = {
  fetchLiked: productsOperations.fetchLiked,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (this.props.isLoggedIn) {
        this.props.fetchLiked();
      }
    },
  }),
);

export default enhancer(LikedListView);
