import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withHandlers, compose, withProps } from 'recompose';
import { routes, routesWithTheme } from '../../scenes/router';
import Api from '../../api';
import { AvatarContainer } from '../../components';
import s from './Header.module.scss';
import './Logofull.svg';
import './Logofull-light.svg';
import { Sell } from '../index';

function Header({ theme, isLoggedIn }) {
  return (
    <header
      className={`${s.header} ${
        theme === 'light' ? s.light : s.dark
      }`}
    >
      <div className={s.left}>
        <Link to={routes.home}>
          <div className={s.logo} />
        </Link>
      </div>
      <Sell />
      <div className={s.right}>
        {Api.Auth.isLoggedIn ? (
          <AvatarContainer />
        ) : (
          <Link to={routes.login} className={s.login}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {};

const enhancer = compose(
  withRouter,
  withProps((ownerProps) => ({
    theme: routesWithTheme.some(
      (route) => route === ownerProps.location.pathname,
    )
      ? 'light'
      : 'dark',
  })),
);

export default enhancer(Header);
