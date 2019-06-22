import React from 'react';
import T from 'prop-types';
import s from './Input.module.scss';

function Input({ fields, label, onChange, name, ...props }) {
  return (
    <div className={s.Input__container}>
      <label className={s.Input__label} htmlFor={name}>
        {label}
        <input
          className={s.Input__field}
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
