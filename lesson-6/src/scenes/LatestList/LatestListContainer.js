import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import LatestListView from './LatestListView';
import {
  productsOperations,
  productsSelectors,
  productsActions,
} from '../../modules/products';

const mapStateToProps = (state) => ({
  list: productsSelectors.getLatest(state),
  isLoading: state.products.latest.isLoading,
  isMoreLoading: state.products.latest.isMoreLoading,
});

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  fetchMoreLatest: productsOperations.fetchMoreLatest,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    loadMore: (props) => () => {
      props.fetchMoreLatest();
    },
  }),
  lifecycle({
    componentDidMount() {
      if (this.props.list.length === 0) {
        this.props.fetchLatest();
      }
    },
  }),
);

export default enhancer(LatestListView);
