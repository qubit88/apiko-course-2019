import React from 'react';
import T from 'prop-types';
import './LatestListItem.scss';

function LatestListItem({ title, price, photo }) {
  const imageStyle = {
    backgroundImage: photo ? `url(${photo})` : 'none',
  };

  return (
    <div className="LatestListItem">
      <div className="LatestListItem__content">
        <div style={imageStyle} className="LatestListItem__img" />
        <div className="LatestListItem__info">
          <h3 className="LatestListItem__title">{title}</h3>
          <div className="LatestListItem__price">&#36;{price}</div>
        </div>
      </div>
    </div>
  );
}

LatestListItem.propTypes = {};

export default LatestListItem;
