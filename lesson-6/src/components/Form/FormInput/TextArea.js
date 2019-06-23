import React from 'react';
import T from 'prop-types';
import s from './FormInput.module.scss';
import FormInput from './FormInput';
import './TextArea.scss';

function TextArea({ name, label, ...props }) {
  return (
    <FormInput name={name} {...props}>
      {({ handleChange, value, error }) => (
        <label className={s.FormInput__label} htmlFor={name}>
          {label}
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
