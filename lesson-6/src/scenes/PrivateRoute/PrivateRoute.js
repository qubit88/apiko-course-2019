import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Api from '../../api/index';
import { routes } from '../router';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Api.Auth.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
}

export default PrivateRoute;
