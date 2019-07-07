import React, { Component } from 'react';
import T from 'prop-types';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
      validation: props.validation || {},
      errors: {},
    };
  }

  validate(name, value) {
    let errors = [];
    let field = this.state.validation[name];
    for (let check in field) {
      const errorMessage = field[check](name, value);
      if (errorMessage) {
        errors.push(errorMessage);
      }
    }
    return errors;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  onChange(name, value) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  setError(name, error) {
    this.setState((state, props) => ({
      errors: {
        ...state.errors,
        [name]: error,
      },
    }));
  }

  getError(name) {
    return this.state.errors[name];
  }

  hasErrors() {
    const fields = Object.entries(this.state.values);
    let errors = false;
    console.log('in has errors', fields);
    fields.forEach(([name, value]) => {
      let error = this.validate(name, value);
      if (error.length > 0) {
        errors = true;
      }
      console.log(name, error);
      this.setError(name, error);
      console.log('getError', this.getError(name));
    });

    return errors;
  }

  render() {
    const value = {
      formState: this.state.values,
      validate: (name, value) => this.validate(name, value),
      onChange: (name, value) => this.onChange(name, value),
      setError: (name, value) => this.setError(name, value),
      getError: (name) => this.getError(name),
      hasErrors: () => this.hasErrors(),
    };

    return (
      <>
        <FormContext.Provider value={value}>
          {this.props.children}
        </FormContext.Provider>
      </>
    );
  }
}

FormContainer.propTypes = {};

export default FormContainer;
