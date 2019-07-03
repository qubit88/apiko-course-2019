import React from 'react';
import PropTypes from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import './ProductGrid.scss';
import ProductGridItem from './ProductGridItem';
import { routes } from '../../scenes/router';

function ProductGrid({ list }) {
  return (
    <div className="ProductGrid">
      {list.map(({ id, title, price, photos, saved }) => (
        <Link
          key={id}
          className="ProductGrid__item-link"
          to={generatePath(routes.product, {
            id,
          })}
        >
          <ProductGridItem
            title={title}
            price={price}
            photo={photos[0]}
            id={id}
            saved={saved}
          />
        </Link>
      ))}
    </div>
  );
}

ProductGrid.propTypes = {};

export default ProductGrid;
