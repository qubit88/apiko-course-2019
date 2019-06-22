import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../router';

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
}

function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn };
}

const enhancer = connect(mapStateToProps);

export default enhancer(PrivateRoute);
