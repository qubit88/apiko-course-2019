import React, { Component } from 'react';
import T from 'prop-types';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
      validate: props.validate,
      errors: {},
    };
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
    console.log(fields);
    fields.forEach(([name, value]) => {
      let error = this.state.validate(name, value);
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
      validate: this.state.validate,
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
