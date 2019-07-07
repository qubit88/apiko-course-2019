import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import './Register.scss';
import { routes } from '../router';
import { LoginRegisterLink } from '../../components';
import {
  FormContainer,
  Input,
  FormSubmitButton,
} from '../../components/Form';

import { required } from '../../services/formValidation';

function Register({ initialValue, handleRegister, isLoading }) {
  const validation = {
    email: { required },
    password: { required },
    confirm: { required },
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

          <Input name="password" type="password" label="PASSWORD" />

          <Input
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
