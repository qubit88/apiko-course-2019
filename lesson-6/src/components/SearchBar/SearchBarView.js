import React from 'react';
import T from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormContainer, TextInput, FormSubmitButton } from '../Form';
import { routes } from '../../scenes/router';
import './SearchBar.scss';

function SearchBar({ fieldValues, history, fetchQuery }) {
  const initialValue = {
    ...fieldValues,
  };

  async function onSubmit(obj) {
    let query = '';

    for (const key in obj) {
      let value = obj[key].trim();
      if (value) {
        query += `${key}=${value}&`;
      }
    }

    console.log(query);
    if (query) {
      try {
        // let res = await Api.Products.(body);

        fetchQuery(query);
        history.push(`${routes.search}?${query}`);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="SearchBar__form">
      <FormContainer initialValue={initialValue}>
        <TextInput
          name="keywords"
          placeholder="Search products by name"
          FieldClassName="SearchBar__field SearchBar__field--keywords"
          ContainerClassName="SearchBar__container--keywords"
        />
        <TextInput
          name="location"
          placeholder="location"
          FieldClassName="SearchBar__field SearchBar__field--location"
          ContainerClassName="SearchBar__container--location"
        />
        <FormSubmitButton
          onSubmit={onSubmit}
          FieldClassName="SearchBar__search-button"
        >
          Search
        </FormSubmitButton>
      </FormContainer>
    </div>
  );
}

SearchBar.propTypes = {};

export default withRouter(SearchBar);
