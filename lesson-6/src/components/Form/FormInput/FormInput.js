import React from 'react';
import T from 'prop-types';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

function FormInput({ name, validate, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, onChange, setError, getError }) => {
        function handleChange(value) {
          if (validate) {
            setError(name, validate(value));
          }

          onChange(name, value);
        }

        const error = getError(name);

        return (
          <div className={s.FormInput__container}>
            {error && <div>{error}</div>}

            {props.children({
              ...props,
              error,
              handleChange,
              value: formState[name],
            })}
          </div>
        );
      }}
    </FormContext.Consumer>
  );
}

export default FormInput;
