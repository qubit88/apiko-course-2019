import React from 'react';
import PropTypes from 'prop-types';
import { ProductGrid } from '../../components';
import './UserView.scss';

function UserView({ user, products, isLoading }) {
  if (!user) {
    return <div>Loading..</div>;
  }
  return (
    <div className="UserView">
      <h3>{user.fullName}</h3>
      {products ? (
        <div className="UserView__products">
          {' '}
          <ProductGrid list={products} />
        </div>
      ) : (
        'Products loads...'
      )}
    </div>
  );
}

UserView.propTypes = {};

export default UserView;
