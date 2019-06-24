import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../router';

function PrivateRoute({
  component: Component,
  render,
  isLoggedIn,
  ...rest
}) {
  console.log('rest', rest, 'loddegin', isLoggedIn);

  // isLoggedIn = true;

  if (render) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? render(props) : <Redirect to={routes.login} />
        }
      />
    );
  }
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
  console.log('state.auth.isLoggedIn', state.auth.isLoggedIn);
  return { isLoggedIn: state.auth.isLoggedIn };
}

const enhancer = connect(mapStateToProps);

export default enhancer(PrivateRoute);
