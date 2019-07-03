import React from 'react';
import T from 'prop-types';
import { Link, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import {
  routes,
  routesWithTheme,
  routesWithSearchBar,
} from '../../scenes/router';
import { AvatarContainer } from '../../components';
import s from './Header.module.scss';
import './Logofull.svg';
import './Logofull-light.svg';
import { Sell, SearchBar, LikedMenuLink } from '../index';

function Header({ theme, isLoggedIn, location }) {
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
      <div className={s.center}>
        <div className={s.header__sell}>
          {location.pathname !== routes.addProduct ? <Sell /> : null}
        </div>
        {routesWithSearchBar.some(
          (route) => route === location.pathname,
        ) ? (
          <SearchBar />
        ) : null}
      </div>

      <div className={s.right}>
        {isLoggedIn ? (
          <AvatarContainer />
        ) : (
          <Link to={routes.login} className={s.login}>
            Login
          </Link>
        )}
        <LikedMenuLink />
      </div>
    </header>
  );
}

Header.propTypes = {};

function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn };
}

const enhancer = compose(
  connect(mapStateToProps),
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
