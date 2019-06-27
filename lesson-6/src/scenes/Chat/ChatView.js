import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import { routes } from '../router';
import './Chat.scss';

function Chat({ items, sendMessage, text, setText }) {
  return (
    <div className="Chat__container">
      <div className="Chat__messages">{items.map((i) => i)}</div>

      <div>
        <input
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
        <button onClick={sendMessage} type="button">
          Send
        </button>
        }
      </div>
    </div>
  );
}

Chat.propTypes = {};

export default Inbox;
