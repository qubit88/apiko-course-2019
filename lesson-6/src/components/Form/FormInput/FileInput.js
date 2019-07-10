import React from 'react';
import T from 'prop-types';
import { FormContext } from '../FormContainer/FormContainer';
// import {withState}
import s from '../FormInputWrapper/FormInput.module.scss';
import './FileInput.scss';

function FileInput({
  name,
  label,
  classWrapper,
  classPreview,
  classLabel,
  ContainerClassName,
  ...props
}) {
  let previewRef = React.createRef();
  return (
    <FormContext.Consumer>
      {({ onFileChange, setError, getError, validateFiles }) => {
        function handleChange(node) {
          if (node.files.length > 0) {
            const file = node.files[0];
            const reader = new FileReader();

            reader.addEventListener(
              'load',
              function() {
                previewRef.current.style.backgroundImage = `url(${
                  reader.result
                })`;
                previewRef.current.classList.add(
                  'FileInput__preview--visible',
                );
              },
              false,
            );
            if (file) {
              reader.readAsDataURL(file);
            }
          }

          if (validateFiles) {
            console.log('node', node);
            setError(name, validateFiles(name, node));
          }
          onFileChange(name, node);
        }

        const errors = getError(name);

        return (
          <div
            className={
              ContainerClassName
                ? `${ContainerClassName}`
                : `${s.FormInput__container}`
            }
          >
            <div className={s.FormInput__label}>
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

              <div
                className={
                  classWrapper
                    ? `${classWrapper}`
                    : 'FileInput__wrapper'
                }
              >
                <div
                  className={
                    classPreview
                      ? `${classPreview}`
                      : 'FileInput__preview'
                  }
                  ref={previewRef}
                />
                <label
                  htmlFor={name}
                  className={
                    classLabel ? `${classLabel}` : 'FileInput__label'
                  }
                >
                  <input
                    type="file"
                    className="FileInput__field"
                    id={name}
                    onChange={(evt) => handleChange(evt.target)}
                  />
                </label>
              </div>
            </div>
          </div>
        );
      }}
    </FormContext.Consumer>
  );
}

FileInput.propTypes = {};

export default FileInput;
