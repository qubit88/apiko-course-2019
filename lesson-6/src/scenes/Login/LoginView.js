import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import { routes } from '../router';
import { Input } from '../../components';

function Login({
  fields,
  handleLogin,
  handleFieldChange,
  isLoading,
}) {
  return (
    <div className={s.Login}>
      <div className={s.Login__form}>
        <h3 className={s.Login__header}>Login</h3>
        <Input
          fields={fields}
          name="email"
          placeholder="example@gmail.com"
          label="EMAIL"
          onChange={handleFieldChange}
        />

        <Input
          fields={fields}
          name="password"
          type="password"
          label="PASSWORD"
          onChange={handleFieldChange}
        />

        <button
          className={s.Login__button}
          type="button"
          onClick={handleLogin}
        >
          {isLoading ? 'Loading' : 'Login'}
        </button>
        <Link to={routes.register}>Register</Link>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
