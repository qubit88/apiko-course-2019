import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';
import SearchBarView from './SearchBarView';
import { productsOperations } from '../../modules/products';

const mapDispatchToProps = {
  fetchQuery: productsOperations.fetchQuery,
};

const enhancer = compose(
  withRouter,
  connect(
    undefined,
    mapDispatchToProps,
  ),
  withProps(({ location }) => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const keywords = params.get('keywords') || '';
      const productLocation = params.get('location') || '';

      return {
        fieldValues: { keywords, location: productLocation },
      };
    }

    return null;
  }),
);

export default enhancer(SearchBarView);
