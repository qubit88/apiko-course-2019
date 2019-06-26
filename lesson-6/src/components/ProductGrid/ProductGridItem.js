import React from 'react';
import T from 'prop-types';
import './ProductGridItem.scss';

function ProductGridItem({ title, price, photo }) {
  const imageStyle = {
    backgroundImage: photo ? `url(${photo})` : 'none',
  };

  return (
    <div className="ProductGridItem">
      <div style={imageStyle} className="ProductGridItem__img" />
      <div className="ProductGridItem__info">
        <h3 className="ProductGridItem__title">{title}</h3>
        <div className="ProductGridItem__price">&#36;{price}</div>
      </div>
    </div>
  );
}

ProductGridItem.propTypes = {};

export default ProductGridItem;
