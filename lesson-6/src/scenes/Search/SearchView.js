import React from 'react';
import T from 'prop-types';
import './SearchView.scss';
import { ProductGrid } from '../../components';

function SearchView({ list, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="SearchView__container">
        <ProductGrid list={list} />
      </div>
    </>
  );
}

SearchView.propTypes = {};

export default SearchView;
