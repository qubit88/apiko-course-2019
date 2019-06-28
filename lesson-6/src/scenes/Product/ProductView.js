import React from 'react';
import PropTypes from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import Modal from 'react-modal';
import { routes } from '../router';
import ContactSellerModal from '../ContactSellerModal/ContactSellerModalContainer';
import './Product.scss';
import heart from './heart.svg';

Modal.setAppElement('#root');

function ProductView({
  product,
  owner,
  isLoading,
  toggleModal,
  isModalOpen,
}) {
  const shouldShowLoading = isLoading || !owner;

  if (!product) {
    return <div>Loading...</div>;
  }

  const imageStyle = {
    backgroundImage: product.photos[0]
      ? `url(${product.photos[0]})`
      : 'none',
  };

  const avatarStyle = {
    backgroundImage:
      owner && owner.avatar ? `url(${owner.avatar})` : 'none',
  };

  const ownerInfo = (id) => (
    <>
      <Link
        className="Product__owner-profile-link"
        to={generatePath(routes.user, {
          id,
        })}
      >
        <div className="Product__owner-decor" />
        <div className="Product__owner-info">
          <div
            className="Product__owner-avatar"
            style={avatarStyle}
          />
          <h3 className="Product__owner-name">{owner.fullName}</h3>
          <p className="Product__owner-location">{owner.location}</p>
        </div>
      </Link>
      <div
        className="Product__owner-chat-with-seller"
        onClick={toggleModal}
      >
        Chat with seller
      </div>
      <Modal onRequestClose={toggleModal} isOpen={isModalOpen}>
        <ContactSellerModal
          productId={product.id}
          close={toggleModal}
        />
      </Modal>
      <div className="Product__owner-favourite">
        <div className="Product__owner-favourite-heart">
          <img src={heart} alt="like" />
        </div>
        Add to favorive
      </div>
    </>
  );

  return (
    <div className="Product">
      <div className="Product__content">
        <div className="Product__img" style={imageStyle} />
        <div className="Product__info">
          <div className="Product__price-wrapper">
            <div className="Product__price">&#36;{product.price}</div>
          </div>
          <div className="Product__info-top">
            <div className="Product__header">
              <h2 className="Product__title">{product.title}</h2>
              <span className="Product__time" />
            </div>
            <div className="Product__location">
              {product.location}
            </div>
          </div>
          <div className="Product__info-bottom">
            <div className="Product__description">
              {product.description}
            </div>
          </div>
        </div>
      </div>

      <div className="Product__owner">
        {shouldShowLoading ? 'Loading...' : ownerInfo(owner.id)}
      </div>
    </div>
  );
}

ProductView.propTypes = {};

export default ProductView;
