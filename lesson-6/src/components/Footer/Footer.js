import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withHandlers, compose, withProps } from 'recompose';
import { routes } from '../../scenes/router';
import Api from '../../scenes/api';
import s from './Footer.module.scss';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer__item}>Copyright © 2017.</div>
      <Link className={s.footer__item} to={routes.privacy}>
        Privacy
      </Link>
      <Link className={s.footer__item} to={routes.terms}>
        Policy.
      </Link>
    </div>
  );
}

export default Footer;
