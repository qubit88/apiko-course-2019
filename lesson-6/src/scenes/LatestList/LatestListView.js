import React from 'react';
import T from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import './LatestListView.scss';
import LatestListItem from './LatestListItem';
import { routes } from '../router';

function LatestListView({ list, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(list);

  return (
    <div className="LatestListView__container">
      {list.map(({ id, title, price, photos }) => (
        <Link
          className="LatestListView__item-link"
          to={generatePath(routes.product, {
            id,
          })}
        >
          <LatestListItem
            title={title}
            price={price}
            photo={photos[0]}
            key={id}
          />
        </Link>
      ))}
    </div>
  );
}

LatestListView.propTypes = {};

export default LatestListView;
