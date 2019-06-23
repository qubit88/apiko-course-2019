import React, { Component } from 'react';
import T from 'prop-types';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = props.initialValue;
  }

  onChange(name, value) {
    this.setState({ [name]: value });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const value = {
      formState: this.state,
      onChange: (name, value) => this.onChange(name, value),
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
