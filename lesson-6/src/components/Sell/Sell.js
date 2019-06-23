import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/router';
import s from './Sell.module.scss';

const Sell = () => (
  <Link to={routes.addProduct}>
    <button type="button" className={s.sell}>
      Sell
    </button>
  </Link>
);
export default Sell;
