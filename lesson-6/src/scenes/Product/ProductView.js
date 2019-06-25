import React from 'react';
import PropTypes from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import { routes } from '../router';
import './Product.scss';

function ProductView({ product, owner, isLoading }) {
  const shouldShowLoading = isLoading || !owner;

  if (!product) {
    return <div>Loading...</div>;
  }

  const ownerInfo = (id) => (
    <div className="ProductView__owner">
      <Link
        to={generatePath(routes.user, {
          id,
        })}
      >
        <h3>{owner.fullName}</h3>
      </Link>
    </div>
  );

  return (
    <div>
      <div>Product: {product.title}</div>
      <div>
        Author:
        {shouldShowLoading ? 'Loading...' : ownerInfo(owner.id)}
      </div>
    </div>
  );
}

ProductView.propTypes = {};

export default ProductView;
