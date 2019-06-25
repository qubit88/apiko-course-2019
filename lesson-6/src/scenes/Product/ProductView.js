import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

function ProductView({ product, isLoading }) {
  const shouldShowLoading = isLoading || !product.owner;
  return (
    <div>
      <div>Product: {product.title}</div>
      <div>
        Author:{' '}
        {shouldShowLoading ? 'Loading...' : product.owner.fullName}
      </div>
    </div>
  );
}

ProductView.propTypes = {};

export default ProductView;
