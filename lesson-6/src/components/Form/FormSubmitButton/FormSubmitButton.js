import React from 'react';
import T from 'prop-types';
import { FormContext } from '../FormContainer/FormContainer';
import './FormSubmitButton.scss';

function FormSubmitButton({ onSubmit, FieldClassName, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, hasErrors }) => {
        function onClick(evt) {
          evt.preventDefault();
          console.log('submitting', hasErrors());

          if (hasErrors()) {
            return;
          }

          onSubmit(formState);
        }

        return (
          <button
            type="button"
            onClick={(evt) => onClick(evt)}
            className={
              FieldClassName
                ? `${FieldClassName}`
                : 'FormSubmitButton'
            }
          >
            {props.children}
          </button>
        );
      }}
    </FormContext.Consumer>
  );
}

export default FormSubmitButton;
