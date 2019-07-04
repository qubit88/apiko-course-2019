import React from 'react';
import T from 'prop-types';
import { Like } from '../../components';
import './ProductGridItem.scss';
import img from './default.png';

function ProductGridItem({ title, price, photo, id, saved }) {
  const imageStyle = {
    backgroundImage: photo ? `url(${photo})` : `url(${img})`,
  };

  return (
    <div className="ProductGridItem">
      <div style={imageStyle} className="ProductGridItem__img" />
      <div className="ProductGridItem__info">
        <Like id={id} like={saved} />
        <h3 className="ProductGridItem__title">{title}</h3>
        <div className="ProductGridItem__price">&#36;{price}</div>
      </div>
    </div>
  );
}

ProductGridItem.propTypes = {};

export default ProductGridItem;
