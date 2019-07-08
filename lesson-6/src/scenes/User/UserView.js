import React from 'react';
import PropTypes from 'prop-types';
import { ProductGrid } from '../../components';
import './UserView.scss';
import { Avatar } from '../../components';

function UserView({ user, products, isLoading }) {
  if (!user) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <div className="User">
        <div className="User__info">
          <div className="User__avatar">
            <Avatar fullName={user.fullName} avatar={user.avatar} />
          </div>
          <h3 className="User__name">{user.fullName}</h3>
        </div>

        {products ? (
          <div className="User__products">
            {' '}
            <ProductGrid list={products} />
          </div>
        ) : (
          'Products loads...'
        )}
      </div>
    </>
  );
}

UserView.propTypes = {};

export default UserView;
