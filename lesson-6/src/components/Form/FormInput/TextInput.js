import React from 'react';
import T from 'prop-types';
import s from '../FormInputWrapper/FormInput.module.scss';
import './TextInput.scss';
import FormInput from '../FormInputWrapper/FormInput';

function Input({
  name,
  label,
  FieldClassName,
  ContainerClassName,
  type,
  ...props
}) {
  return (
    <FormInput
      name={name}
      ContainerClassName={ContainerClassName}
      {...props}
    >
      {({ handleChange, value, errors }) => (
        <label className={s.FormInput__label} htmlFor={name}>
          <div>
            {label}
            {errors &&
              errors.length > 0 &&
              errors.map((error, index) => (
                <span key={index + error} className={s.error}>
                  {error}
                </span>
              ))}
          </div>
          <input
            className={
              FieldClassName
                ? `${FieldClassName}`
                : `${s.FormInput__field} TextInput__field`
            }
            id={name}
            value={value}
            onChange={(evt) => handleChange(evt.target.value)}
            type="type"
          />
        </label>
      )}
    </FormInput>
  );
}

Input.propTypes = {};

export default Input;
