import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import { List, AutoSizer } from 'react-virtualized';
import { routes } from '../router';
import { Message, Avatar } from '../../components/';
import InfiniteChat from './InfiniteChat';
import './Chat.scss';
import { init } from '../../api/Api';

function Chat({
  sendMessage,
  text,
  setText,
  chat,
  handleMobileView,
  isLoading,
  chatIsLoading,
}) {
  // List data as an array of strings
  // const list = items;

  // function rowRenderer({
  //   key, // Unique key within array of rows
  //   index, // Index of row within collection
  //   isScrolling, // The List is currently being scrolled
  //   isVisible, // This row is visible within the List (eg it is not an overscanned row)
  //   style, // Style object to be applied to row (to position it)
  // }) {
  //   const message = list[index];

  //   // If row content is complex, consider rendering a light-weight placeholder while scrolling.
  //   const content = isScrolling ? (
  //     '...'
  //   ) : (
  //     <Message key={message.id} item={message} user={user} />
  //   );
  //   return (
  //     <div key={key} style={style}>
  //       {content}
  //     </div>
  //   );
  // }

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
              <Link
                to={generatePath(routes.user, {
                  id: participant.id,
                })}
                key={participant.id}
                className="Chat__participant"
              >
                <div className="Chat__avatar-container">
                  <Avatar
                    fullName={participant.fullName}
                    avatar={participant.avatar}
                  />
                </div>
                <p className="Chat__participant-name">
                  {participant.fullName}
                </p>
              </Link>
            ))
          : null}
      </div>
      <div className="Chat__messages">
        <InfiniteChat />
        {/* <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={list.length}
              rowHeight={50}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer> */}
        {/* {items.map((i) => (
          <Message key={i.id} item={i} user={user} />
        ))} */}
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
