import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Register.module.scss';
import { routes } from '../router';
import { Input } from '../../components';

function Register({
  fields,
  handleRegister,
  handleFieldChange,
  isLoading,
}) {
  return (
    <div className={s.Register}>
      <h3 className={s.Register__header}>Login</h3>
      <div className={s.Register__form}>
        <Input
          fields={fields}
          name="fullName"
          placeholder="Full Name"
          label="FULLNAME"
          onChange={handleFieldChange}
        />
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
          type="button"
          className={s.Register__button}
          onClick={handleRegister}
        >
          {isLoading ? 'Loading' : 'Register'}
        </button>
        <Link to={routes.login}>Log in</Link>
      </div>
    </div>
  );
}

Register.propTypes = {};

export default Register;
