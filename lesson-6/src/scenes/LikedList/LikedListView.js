import React from 'react';
import T from 'prop-types';
import './LikedListView.scss';
import { ProductGrid } from '../../components';

function LikedListView({ list, isLoading }) {
  return (
    <>
      <div className="LikedList__container">
        <h2 className="LikedList__header">
          saved items
          <span className="LikedList__amount">
            ({isLoading ? null : list.length})
          </span>
        </h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ProductGrid list={list} />
        )}
      </div>
    </>
  );
}

LikedListView.propTypes = {};

export default LikedListView;
