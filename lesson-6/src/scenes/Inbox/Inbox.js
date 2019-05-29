import React from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';
import s from './Inbox.module.scss';
import Api from '../api/index';
import { routes } from '../router';

function Inbox() {
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login} />;
  }

  return <div>Inbox</div>;
}

Inbox.propTypes = {};

export default Inbox;
