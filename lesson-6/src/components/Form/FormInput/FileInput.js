import React from 'react';
import T from 'prop-types';
import s from '../FormInputWrapper/FormInput.module.scss';
import './FileInput.scss';

function FileInput({ name, label, id, validate, ...props }) {
  return (
    <div className={s.FormInput__container}>
      <div className={s.FormInput__label}>
        {label}

        <div className="FileInput__wrapper">
          <label htmlFor={name} className="FileInput__label">
            <input
              type="file"
              className="FileInput__field"
              id={name}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

FileInput.propTypes = {};

export default FileInput;
