import React from 'react';
import T from 'prop-types';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

function FormInput({ name, ContainerClassName, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, onChange, setError, getError, validate }) => {
        function handleChange(value) {
          if (validate) {
            setError(name, validate(name, value));
          }

          onChange(name, value);
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
            {props.children({
              ...props,
              errors,
              handleChange,
              value: formState[name],
            })}
          </div>
        );
      }}
    </FormContext.Consumer>
  );
}

export default FormInput;
