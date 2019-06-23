import React from 'react';
import T from 'prop-types';
import { FormContext } from '../FormContainer/FormContainer';
import './FormSubmitButton.scss';

function FormSubmitButton({ onSubmit, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, hasErrors }) => {
        function onClick() {
          if (hasErrors()) {
            return;
          }

          onSubmit(formState);
        }

        return (
          <button
            type="button"
            onClick={() => onClick()}
            className="FormSubmitButton"
          >
            {props.children}
          </button>
        );
      }}
    </FormContext.Consumer>
  );
}

export default FormSubmitButton;
