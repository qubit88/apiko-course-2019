import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import './Register.scss';
import { routes } from '../router';
import { LoginRegisterLink } from '../../components';
import {
  FormContainer,
  Input,
  PasswordInput,
  FormSubmitButton,
} from '../../components/Form';

import {
  required,
  sameAs,
  emailPattern,
} from '../../services/formValidation';

function Register({ initialValue, handleRegister, isLoading }) {
  const sameCheck = sameAs('password', 'confirm');
  const validation = {
    email: { required, emailPattern },
    fullName: { required },
    password: { required, sameAs: sameCheck },
    confirm: { required, sameAs: sameCheck },
  };

  return (
    <div className="Register">
      <div className="Register__form">
        <h3 className="Register__header">Register</h3>
        <FormContainer
          initialValue={initialValue}
          validation={validation}
        >
          <Input
            name="email"
            placeholder="example@gmail.com"
            label="EMAIL"
          />

          <Input
            name="fullName"
            placeholder="Tony Stark"
            label="FULL NAME"
          />

          <PasswordInput
            name="password"
            type="password"
            label="PASSWORD"
          />

          <PasswordInput
            name="confirm"
            type="password"
            label="CONFIRM PASSWORD"
          />

          <FormSubmitButton
            FieldClassName="Login__button"
            onSubmit={handleRegister}
          >
            {isLoading ? 'Loading' : 'Register'}
          </FormSubmitButton>
        </FormContainer>
      </div>
      <LoginRegisterLink
        to={routes.login}
        text="I already have an account"
      >
        Log in
      </LoginRegisterLink>
    </div>
  );
}

Register.propTypes = {};

export default Register;
