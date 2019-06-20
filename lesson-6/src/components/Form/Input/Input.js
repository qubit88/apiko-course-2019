import React from 'react';
import T from 'prop-types';
import s from './Input.module.scss';

function Input({ fields, label, onChange, name, ...props }) {
  return (
    <div className={s.container}>
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          value={fields[name]}
          onChange={(evt) => onChange(name, evt.target.value)}
          {...props}
        />
      </label>
    </div>
  );
}

Input.propTypes = {};

export default Input;
