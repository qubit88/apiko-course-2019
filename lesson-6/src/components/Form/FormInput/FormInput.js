import React from 'react';
import T from 'prop-types';
import s from './FormInput.module.scss';
import { FormContext } from '../FormContainer/FormContainer';

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

function Input({ name, label, ...props }) {
  return (
    <FormInput name={name} {...props}>
      {({ handleChange, value, error }) => (
        <label className={s.FormInput__label} htmlFor={name}>
          {label}
          <input
            className={s.FormInput__field}
            id={name}
            value={value}
            onChange={(evt) => handleChange(evt.target.value)}
          />
        </label>
      )}
    </FormInput>
  );
}

Input.propTypes = {};

export default Input;
