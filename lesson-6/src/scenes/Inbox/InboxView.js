import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import { routes } from '../router';
import Chat from '../Chat/ChatContainer';
import { Header } from '../../components/';
import './Inbox.scss';

function Inbox({ items }) {
  return (
    <>
      <Header />
      <div className="Inbox__container">
        <aside className="Inbox__aside">
          {items.map((i) => (
            <Link
              className="Inbox__chat-link"
              key={i.id}
              to={generatePath(routes.chat, { id: i.id })}
            >
              <div className="Inbox__chat-name">
                {i.product.title}
              </div>
              <div className="Inbox__last-message">
                {i.lastMessage && i.lastMessage.text}
              </div>
            </Link>
          ))}
        </aside>
        <div className="Inbox__main">
          <Route path={routes.chat} component={Chat} />
        </div>
      </div>
    </>
  );
}

Inbox.propTypes = {};

export default Inbox;
