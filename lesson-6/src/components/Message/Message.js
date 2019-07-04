import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

function Message({ item, user }) {
  const { text, ownerId } = item;
  const ownMessage = user && user.id === ownerId;

  return (
    <div className="Message__wrapper">
      <div
        className={`Message__container ${
          ownMessage ? 'Message__own' : 'Message__participant'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

Message.propTypes = {};

export default Message;
