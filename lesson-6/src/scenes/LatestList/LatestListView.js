import React from 'react';
import T from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import './LatestListView.scss';
import { ProductGrid } from '../../components/';
import { routes } from '../router';

function LatestListView({
  list,
  isLoading,
  loadMore,
  isMoreLoading,
}) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="LatestListView__container">
      <ProductGrid list={list} />

      {isMoreLoading ? (
        <div>Loading...</div>
      ) : (
        <button
          type="button"
          className="LatestListView__load-more"
          onClick={loadMore}
        >
          load more
        </button>
      )}
    </div>
  );
}

LatestListView.propTypes = {};

export default LatestListView;
