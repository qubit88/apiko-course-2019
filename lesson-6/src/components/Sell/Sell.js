import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/router';
import s from './Sell.module.scss';

const Sell = () => (
  <Link
    to={{ pathname: `${routes.addProduct}`, state: { modal: true } }}
  >
    <button type="button" className={s.sell}>
      Sell
    </button>
  </Link>
);
export default Sell;
