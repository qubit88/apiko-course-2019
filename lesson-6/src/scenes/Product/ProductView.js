import React from 'react';
import PropTypes from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import Modal from 'react-modal';
import { routes } from '../router';
import ContactSellerModal from '../ContactSellerModal/ContactSellerModalContainer';
import { Avatar } from '../../components';
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

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '95.6%',
      maxWidth: '820px',
      boxShadow: '0px 2px 42px rgba(0, 0, 0, 0.111233)',
      borderRadius: '7px',
      padding: '2% 9.5% 4% 9.5%',
    },
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
          <div className="Product__owner-avatar">
            <Avatar fullName={owner.fullName} avatar={owner.avatar} />
          </div>
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
      <Modal
        style={customModalStyles}
        onRequestClose={toggleModal}
        isOpen={isModalOpen}
      >
        <ContactSellerModal
          productId={product.id}
          close={toggleModal}
        />
      </Modal>
      <div className="Product__owner-favourite">
        <div className="Product__owner-favourite-heart">
          <img src={heart} alt="like" />
        </div>
        Add to favorite
      </div>
    </>
  );

  return (
    <div className="Product main-content">
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
