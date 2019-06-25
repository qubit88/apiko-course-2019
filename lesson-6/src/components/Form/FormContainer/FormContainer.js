import React, { Component } from 'react';
import T from 'prop-types';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
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
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: error,
      },
    });
  }

  getError(name) {
    return this.state.errors[name];
  }

  hasErrors() {
    const { errors } = this.state;
    for (const error in errors) {
      if (errors[error]) {
        return true;
      }
    }

    return false;
  }

  render() {
    const value = {
      formState: this.state.values,
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
