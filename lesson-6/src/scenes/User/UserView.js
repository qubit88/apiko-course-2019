import React from 'react';
import PropTypes from 'prop-types';

function UserView({ user, products, isLoading }) {
  if (!user) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <h3>{user.fullName}</h3>
      {products
        ? products.map((product) => <div>{product.title}</div>)
        : 'Products loads...'}
    </div>
  );
}

UserView.propTypes = {};

export default UserView;
