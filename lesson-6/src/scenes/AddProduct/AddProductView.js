import React from 'react';
import T from 'prop-types';
import './AddProductView.scss';

import {
  FormContainer,
  TextInput,
  TextArea,
  FormSubmitButton,
} from '../../components/Form';
import { Header } from '../../components/';
import Api from '../../api';
import { routes } from '../router';

function AddProductView({ history, isModal }) {
  const initialValue = {
    title: '',
    description: '',
    price: 0,
    photos: ['string'],
    location: '',
  };

  function required(value) {
    if (value.trim().length === 0) {
      return 'Is required';
    }

    return null;
  }

  function back(target) {
    if (target.classList.contains('AddProductView__modal-wrapper')) {
      history.goBack();
    }
  }

  async function onSubmit(body) {
    console.log(body);
    let res = await Api.Products.addProduct(body);
    console.log(res);
    history.push(routes.home);
  }

  const form = (
    <div className="AddProductView__form">
      <div className="AddProductView__form-content">
        <h2 className="AddProduct__header">Add product</h2>
        <FormContainer initialValue={initialValue}>
          <TextInput
            name="title"
            label="TITLE"
            placeholder="Oranges"
          />
          <TextInput
            name="location"
            label="LOCATION"
            validate={required}
            placeholder="city"
          />
          <TextArea
            name="description"
            label="DESCRIPTION"
            validate={required}
            placeholder="product description"
          />
          <TextInput
            name="price"
            label="price"
            validate={required}
            placeholder="0"
          />
          <FormSubmitButton onSubmit={onSubmit}>
            Submit
          </FormSubmitButton>
        </FormContainer>
      </div>
    </div>
  );

  const page = (
    <>
      <Header />
      <div className="AddProductView">{form}</div>
    </>
  );

  const modal = (
    <div
      onClick={(evt) => back(evt.target)}
      className="AddProductView__modal-wrapper"
    >
      {form}
    </div>
  );

  return (isModal && modal) || page;
}

AddProductView.propTypes = {};

export default AddProductView;
