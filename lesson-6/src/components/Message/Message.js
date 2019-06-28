import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

function Message({ item }) {
  const { text } = item;

  return <div className="Message__container">{text}</div>;
}

Message.propTypes = {};

export default Message;
