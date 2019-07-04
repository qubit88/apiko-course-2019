import React from 'react';
import T from 'prop-types';
import { NavLink, generatePath, Route } from 'react-router-dom';
import { routes } from '../router';
import Chat from '../Chat/ChatContainer';
import { Header } from '../../components/';
import './Inbox.scss';

function Inbox({ items, location }) {
  return (
    <div className="Inbox">
      <Header />
      <div className="Inbox__container">
        <aside className="Inbox__aside">
          {items.map((i) => (
            <NavLink
              className="Inbox__chat-link"
              key={i.id}
              to={generatePath(routes.chat, { id: i.id })}
              activeStyle={{
                backgroundColor: 'var(--light-green)',
              }}
            >
              <div className="Inbox__chat-title">
                {i.product.title}
              </div>
              <div className="Inbox__chat-username">
                {i.participants[0].fullName}
              </div>
              <div className="Inbox__last-message">
                {i.lastMessage && i.lastMessage.text}
              </div>
            </NavLink>
          ))}
        </aside>
        <div className="Inbox__main">
          <Route
            path={routes.chat}
            key={location.pathname}
            component={Chat}
            exact
          />
        </div>
      </div>
    </div>
  );
}

Inbox.propTypes = {};

export default Inbox;
