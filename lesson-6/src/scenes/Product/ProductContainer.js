import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import ProductView from './ProductView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';

const mapStateToProps = (state, props) => ({
  product: productsSelectors.getProduct(state, props.match.params.id),
  owner: productsSelectors.getProductOwner(
    state,
    props.match.params.id,
  ),
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
  withRouter,
  withState('isModalOpen', 'setIsModalOpen', false),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    toggleModal: (props) => () => {
      props.setIsModalOpen(!props.isModalOpen);
    },
  }),
  lifecycle({
    componentDidMount() {
      if (!this.props.owner || !this.props.product) {
        this.props.fetchProduct(this.props.match.params.id);
      }
    },
  }),
);

export default enhancer(ProductView);
