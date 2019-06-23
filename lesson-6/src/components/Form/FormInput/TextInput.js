import React from 'react';
import T from 'prop-types';
import s from './FormInput.module.scss';
import './TextInput.scss';
import FormInput from './FormInput';

function Input({ name, label, ...props }) {
  return (
    <FormInput name={name} {...props}>
      {({ handleChange, value, error }) => (
        <label className={s.FormInput__label} htmlFor={name}>
          {label}
          <input
            className={`${s.FormInput__field} TextInput__field`}
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
