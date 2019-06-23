import React from 'react';
import T from 'prop-types';
import './AddProductView.scss';
import { FormContainer, FormInput } from '../../components/Form';

function AddProductView({ list, isLoading }) {
  const initialValue = {
    title: '',
    // description: '',
    // price: 0,
    // photos: '',
    location: '',
  };

  return (
    <div>
      <FormContainer initialValue={initialValue}>
        <FormInput name="title" label="TITLE" placeholder="Oranges" />
        <FormInput
          name="location"
          label="LOCATION"
          placeholder="city"
        />
      </FormContainer>
    </div>
  );
}

AddProductView.propTypes = {};

export default AddProductView;
