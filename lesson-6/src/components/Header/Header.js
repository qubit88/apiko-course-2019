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
import {
  Sell,
  SearchBar,
  LikedMenuLink,
  InboxMenuLink,
} from '../index';

function Header({ theme, isLoggedIn, location }) {
  return (
    <header
      className={`${s.header} ${
        theme === 'light' ? s.light : s.dark
      }`}
    >
      <div className={s.firstRow}>
        <div className={s.left}>
          <Link className={s.logoWrapper} to={routes.home}>
            <div className={s.logo} />
          </Link>
        </div>
        <div className={s.center}>
          {isLoggedIn ? <InboxMenuLink /> : null}
          <div className={s.sell}>
            {location.pathname !== routes.addProduct ? (
              <Sell />
            ) : null}
          </div>
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
      </div>
      <div className={s.secondRow}>
        {routesWithSearchBar.some(
          (route) => route === location.pathname,
        ) ? (
          <SearchBar />
        ) : null}
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
