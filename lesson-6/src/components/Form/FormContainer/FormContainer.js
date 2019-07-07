import React, { Component } from 'react';
import T from 'prop-types';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
      files: this.filterFiles(props.initialValue),
      validation: props.validation || {},
      errors: {},
    };
  }

  filterFiles(initialValue) {
    let res = {};
    let fields = Object.entries(initialValue);

    fields.forEach(([name, value]) => {
      if (typeof value === 'object') {
        res[name] = document.querySelector(`#${name}`);
      }
    });

    return res;
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

  validateFiles(name, node) {
    let errors = [];
    let field = this.state.validation[name];
    for (let check in field) {
      const errorMessage = field[check](name, undefined, node);
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

  onFileChange(name, node) {
    this.setState({
      files: {
        ...this.state.files,
        [name]: node,
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
    const files = Object.entries(this.state.files);
    let errors = false;

    fields.forEach(([name, value]) => {
      if (typeof value !== 'object') {
        let error = this.validate(name, value);
        if (error.length > 0) {
          errors = true;
        }
        this.setError(name, error);
      }
    });

    console.log(files);

    files.forEach(([name, node]) => {
      node = node ? node : document.querySelector(`#${name}`);
      const filesErrors = this.validateFiles(name, node);

      if (filesErrors.length > 0) {
        errors = true;
      }

      this.setError(name, filesErrors);
    });

    return errors;
  }

  render() {
    const value = {
      formState: this.state.values,
      files: this.state.files,
      validate: (name, value) => this.validate(name, value),
      validateFiles: (name, node) => this.validateFiles(name, node),
      onChange: (name, value) => this.onChange(name, value),
      onFileChange: (name, value) => this.onFileChange(name, value),
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
