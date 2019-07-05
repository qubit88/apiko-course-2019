import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../router';

function PrivateRoute({
  component: Component,
  render,
  isLoggedIn,
  isLoading,
  ...rest
}) {
  if (isLoading) {
    return <div>..isLoading</div>;
  }

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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.app.isLoading,
});

const enhancer = connect(mapStateToProps);

export default enhancer(PrivateRoute);
