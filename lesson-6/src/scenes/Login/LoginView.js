import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import { routes } from '../router';
import {
  FormContainer,
  Input,
  FormSubmitButton,
} from '../../components/Form';
import { required } from '../../services/formValidation';

function Login({ initialValue, handleLogin, isLoading }) {
  const validation = {
    email: { required },
    password: { required },
  };

  return (
    <div className={s.Login}>
      <div className={s.Login__form}>
        <h3 className={s.Login__header}>Login</h3>
        <FormContainer
          initialValue={initialValue}
          validation={validation}
        >
          <Input
            name="email"
            placeholder="example@gmail.com"
            label="EMAIL"
          />

          <Input name="password" type="password" label="PASSWORD" />

          <FormSubmitButton
            className={s.Login__button}
            onSubmit={handleLogin}
          >
            {isLoading ? 'Loading' : 'Login'}
          </FormSubmitButton>
        </FormContainer>

        <Link to={routes.register}>Register</Link>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
