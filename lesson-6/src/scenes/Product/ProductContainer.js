import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import ProductView from './ProductView';
import { productsOperations } from '../../modules/products';

const mapStateToProps = (state, props) => ({
  product: state.entities.products[props.match.params.id],
  owner: state.entities.products[props.match.params.id],
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.product.owner) {
        this.props.fetchProduct(this.props.product.id);
      }
    },
  }),
);

export default enhancer(ProductView);
