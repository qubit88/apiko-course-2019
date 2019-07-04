import React from 'react';
import PropTypes from 'prop-types';
import { ProductGrid } from '../../components';
import './UserView.scss';
import { Header, Footer } from '../../components';

function UserView({ user, products, isLoading }) {
  if (!user) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <Header />
      <div className="User">
        <div className="User__info">
          <div
            style={{
              backgroundImage: user.avatar
                ? `url(${user.avatar})`
                : 'none',
            }}
            className="User__avatar"
          />
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
      <Footer />
    </>
  );
}

UserView.propTypes = {};

export default UserView;
