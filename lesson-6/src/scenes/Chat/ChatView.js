import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import { routes } from '../router';
import { Message } from '../../components/';
import './Chat.scss';
import { importDeclaration } from '@babel/types';

function Chat({ items, sendMessage, text, setText, user }) {
  return (
    <div className="Chat__container">
      <div className="Chat__messages">
        {items.map((i) => (
          <Message key={i.id} item={i} user={user} />
        ))}
      </div>

      <div className="Chat__input-wrapper">
        <input
          className="Chat__input"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
        <button
          className="Chat__send"
          onClick={sendMessage}
          type="button"
        >
          Send
        </button>
      </div>
    </div>
  );
}

Chat.propTypes = {};

export default Chat;
