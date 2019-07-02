import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import SearchView from './SearchView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';

const mapStateToProps = (state, { location }) => ({
  list: productsSelectors.getSearchedProducts(state),
  isLoading: state.products.searchedProducts.isLoading,
});

const mapDispatchToProps = {
  fetchQuery: productsOperations.fetchQuery,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (this.props.list.length === 0) {
        let query = '';
        let params = new URLSearchParams(this.props.location.search);
        let keywords = params.get('keywords');
        let location = params.get('location');
        let priceFrom = params.get('priceFrom');
        let priceTo = params.get('priceTo');
        let offset = params.get('offset') || 0;
        let limit = params.get('limit') || 20;

        let obj = {
          keywords,
          location,
          priceFrom,
          priceTo,
          offset,
          limit,
        };

        for (const key in obj) {
          if (obj[key] || obj[key] === 0) {
            query += `${key}=${obj[key]}&`;
          }
        }

        console.log(query);

        this.props.fetchQuery(query);
      }
    },
  }),
);

export default enhancer(SearchView);
