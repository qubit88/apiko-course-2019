import React from 'react';
import T from 'prop-types';
import s from './FormInput.module.scss';
import { FormContext } from '../FormContainer/FormContainer';

function FormInput({ name, label, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, onChange }) => (
        <div className={s.FormInput__container}>
          <label className={s.FormInput__label} htmlFor={name}>
            {label}
            <input
              className={s.FormInput__field}
              id={name}
              value={formState[name]}
              onChange={(evt) => onChange(name, evt.target.value)}
              {...props}
            />
          </label>
        </div>
      )}
    </FormContext.Consumer>
  );
}

FormInput.propTypes = {};

export default FormInput;
