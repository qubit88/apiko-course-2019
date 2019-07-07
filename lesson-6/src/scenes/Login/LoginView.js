import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import './Login.scss';
import { routes } from '../router';
import {
  FormContainer,
  Input,
  PasswordInput,
  FormSubmitButton,
} from '../../components/Form';
import { LoginRegisterLink } from '../../components';
import { required } from '../../services/formValidation';

function Login({ initialValue, handleLogin, isLoading }) {
  const validation = {
    email: { required },
    password: { required },
  };

  return (
    <div className="Login">
      <div className="Login__form">
        <h3 className="Login__header">Login</h3>
        <FormContainer
          initialValue={initialValue}
          validation={validation}
        >
          <Input
            name="email"
            placeholder="example@gmail.com"
            label="EMAIL"
          />

          <PasswordInput
            name="password"
            type="password"
            label="PASSWORD"
          />

          <FormSubmitButton
            FieldClassName="Login__button"
            onSubmit={handleLogin}
          >
            {isLoading ? 'Loading' : 'Login'}
          </FormSubmitButton>
        </FormContainer>
      </div>
      <LoginRegisterLink
        to={routes.register}
        text="I have no account"
      >
        Register now
      </LoginRegisterLink>
    </div>
  );
}

Login.propTypes = {};

export default Login;
