import React from 'react';
import T from 'prop-types';
import './AddProductView.scss';

import {
  FormContainer,
  TextInput,
  FileInput,
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
    try {
      let formData = new FormData();
      let imagefile = document.querySelector('#photos');
      formData.append('image', imagefile.files[0]);
      let image = await Api.Image.uploadImages(formData);

      body.photos = [image.data];
      let res = await Api.Products.addProduct(body);

      history.push(routes.home);
    } catch (err) {
      console.log(err);
    }
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
            validate={required}
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
          <FileInput name="photos" label="photos" id="photos" />
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
