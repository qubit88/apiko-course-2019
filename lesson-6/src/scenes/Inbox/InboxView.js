import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import { routes } from '../router';
import Chat from '../Chat/ChatContainer';
import './Inbox.scss';

function Inbox({ items }) {
  return (
    <div className="Inbox__container">
      <aside className="Inbox__aside">
        {items.map((i) => (
          <Link to={generatePath(routes.chat, { id: i.id })}>
            {i.product.title}
          </Link>
        ))}
      </aside>
      <div className="Inbox__main">
        <Route path={routes.chat} component={Chat} />
      </div>
    </div>
  );
}

Inbox.propTypes = {};

export default Inbox;
