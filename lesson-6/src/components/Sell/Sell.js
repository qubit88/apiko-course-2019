import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/router';
import './Sell.scss';

const Sell = () => (
  <Link
    to={{ pathname: `${routes.addProduct}`, state: { modal: true } }}
    className="Sell__link"
  >
    <button type="button" className="Sell__button">
      Sell
    </button>
  </Link>
);
export default Sell;
