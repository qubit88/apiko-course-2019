import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar/Avatar';
import './ContactSellerModal.scss';

function ContactSellerModalView({
  product,
  owner,
  text,
  setText,
  submit,
  disabled,
}) {
  return (
    <div>
      <h2 className="ContactSellerModal__header">Contact seller</h2>
      <div className="ContactSellerModal__title">
        Subject: {product.title}
      </div>
      <div className="ContactSellerModal__info">
        <div className="ContactSellerModal__avatarWrapper">
          <Avatar fullName={owner.fullName} avatar={owner.avatar} />
        </div>

        <div>
          <h3 className="ContactSellerModal__name">
            {owner.fullName}
          </h3>
          <div className="ContactSellerModal__location">
            {owner.location}
          </div>
        </div>
      </div>

      <p className="ContactSellerModal__message">message</p>
      <textarea
        value={text}
        onChange={(evt) => setText(evt.target.value)}
        className="ContactSellerModal__textarea"
        placeholder="For example: Iron man suit"
      />
      <button
        className="ContactSellerModal__button"
        disabled={disabled}
        onClick={submit}
        type="button"
      >
        Send message
      </button>
    </div>
  );
}

ContactSellerModalView.propTypes = {};

export default ContactSellerModalView;
