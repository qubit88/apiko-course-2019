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
  isLoading,
  chatIsLoading,
}) {
  return (
    <div className="Chat__container">
      <div className="Chat__participants">
        {chat
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
