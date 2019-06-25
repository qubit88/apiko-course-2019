import React from 'react';
import T from 'prop-types';
import './LatestListView.scss';
import LatestListItem from './LatestListItem';

function LatestListView({ list, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(list);

  return (
    <div className="LatestListView__container">
      {list.map(({ id, title, price, photos }) => (
        <LatestListItem
          title={title}
          price={price}
          photo={photos[0]}
          key={id}
        />
      ))}
    </div>
  );
}

LatestListView.propTypes = {};

export default LatestListView;
