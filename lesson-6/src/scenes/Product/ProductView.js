import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

function ProductView({ product, owner, isLoading }) {
  const shouldShowLoading = isLoading || !owner;

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>Product: {product.title}</div>
      <div>
        Author: {shouldShowLoading ? 'Loading...' : owner.fullName}
      </div>
    </div>
  );
}

ProductView.propTypes = {};

export default ProductView;
