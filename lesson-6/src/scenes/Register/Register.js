import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Register.module.scss';
import { routes } from '../router';

function Register() {
  return (
    <div>
      <Link to={routes.login}>login</Link>
    </div>
  );
}

Register.propTypes = {};

export default Register;
