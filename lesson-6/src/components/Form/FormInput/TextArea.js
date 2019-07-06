import React from 'react';
import T from 'prop-types';
import s from '../FormInputWrapper/FormInput.module.scss';
import FormInput from '../FormInputWrapper/FormInput';
import './TextArea.scss';

function TextArea({ name, label, ...props }) {
  return (
    <FormInput name={name} {...props}>
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
          <textarea
            className={`${s.FormInput__field} TextArea__field`}
            id={name}
            value={value}
            onChange={(evt) => handleChange(evt.target.value)}
          />
        </label>
      )}
    </FormInput>
  );
}

TextArea.propTypes = {};

export default TextArea;
