import React from 'react';
import T from 'prop-types';
import './AddProductView.scss';

import {
  FormContainer,
  Input,
  FileInput,
  TextArea,
  FormSubmitButton,
} from '../../components/Form';
import Api from '../../api';
import { routes } from '../router';
import { required } from '../../services/formValidation';

function AddProductView({ history, isModal }) {
  const initialValue = {
    title: '',
    description: '',
    price: 0,
    photos: ['string'],
    location: '',
  };

  const validation = {
    title: { required },
    location: { required },
    description: { required },
  };

  function back(target) {
    if (target.classList.contains('AddProductView__modal-wrapper')) {
      history.goBack();
    }
  }

  async function onSubmit(body) {
    try {
      let formData = new FormData();
      let imagefile = document.querySelector('#photos');

      if (imagefile.files.length > 0) {
        formData.append('image', imagefile.files[0]);
        const image = await Api.Image.uploadImages(formData);
        body.photos = [image.data];
      }

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
        <FormContainer
          initialValue={initialValue}
          validation={validation}
        >
          <Input
            name="title"
            label="TITLE"
            placeholder="Oranges"
            type="text"
          />
          <Input
            name="location"
            label="LOCATION"
            placeholder="city"
            type="text"
          />
          <TextArea
            name="description"
            label="DESCRIPTION"
            placeholder="product description"
          />
          <FileInput name="photos" label="photos" id="photos" />
          <Input name="price" label="price" placeholder="0" />
          <FormSubmitButton onSubmit={onSubmit}>
            Submit
          </FormSubmitButton>
        </FormContainer>
      </div>
    </div>
  );

  const page = (
    <>
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
