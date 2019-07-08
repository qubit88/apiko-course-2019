import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import { routes } from '../router';
import { Message, Avatar } from '../../components/';
import './Chat.scss';

function Chat({
  items,
  sendMessage,
  text,
  setText,
  user,
  chat,
  handleMobileView,
  isLoading,
  chatIsLoading,
}) {
  return (
    <div className="Chat__container">
      <div className="Chat__participants">
        <div
          className="Chat__hide-on-mobile"
          onClick={handleMobileView}
        >
          <svg viewBox="0 0 28 28" width="100%" height="100%">
            <g transform="translate(0.000000, 2.000000)">
              <polygon
                fill="black"
                points="8 11 23 11 23 13 8 13.0032349 13.4439 19.5297864 11.643033 21.0733867 3.86584444 12 11.643033 2.92661331 13.4439 4.47021357"
              />
            </g>
          </svg>
        </div>
        {chat && chat.participants
          ? chat.participants.map((participant) => (
              <div key={participant.id} className="Chat__participant">
                <div className="Chat__avatar-container">
                  <Avatar
                    fullName={participant.fullName}
                    avatar={user.avatar}
                  />
                </div>
                <p className="Chat__participant-name">
                  {participant.fullName}
                </p>
              </div>
            ))
          : null}
      </div>
      <div className="Chat__messages">
        {items.map((i) => (
          <Message key={i.id} item={i} user={user} />
        ))}
      </div>

      <div className="Chat__input-wrapper">
        <input
          className="Chat__input"
          placeholder="Type your message here..."
          value={text}
          onChange={(evt) => setText(evt.target.value)}
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              sendMessage();
            }
          }}
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
