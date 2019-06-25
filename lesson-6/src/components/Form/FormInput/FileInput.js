import React from 'react';
import T from 'prop-types';
import s from './FormInput.module.scss';
import './FileInput.scss';
import FormInput from './FormInput';

function FileInput({ name, label, id, ...props }) {
  return (
    <label className={s.FormInput__label} htmlFor={name}>
      {label}
      <input
        type="file"
        className={`${s.FormInput__field} FileInput__field`}
        id={name}
      />
    </label>
  );
}

FileInput.propTypes = {};

export default FileInput;
