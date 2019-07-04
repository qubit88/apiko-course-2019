import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

function Message({ item, user }) {
  const { text, ownerId, createdAt } = item;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const time = (t) => {
    const millisecInADay = 3600 * 24 * 1000;
    const now = new Date();
    const moreThenADayAgo = now - t > millisecInADay;

    let day;
    let month;
    let year;

    const date = new Date(t);

    const min = `0${date.getMinutes(date)}`.slice(-2);
    const hour = `0${date.getHours(date)}`.slice(-2);

    if (moreThenADayAgo) {
      day = date.getDate();
      month = months[date.getMonth()];
      year = date.getFullYear();
    }

    return moreThenADayAgo
      ? `${month} ${day}, ${year} ${hour}:${min}`
      : `${hour}:${min}`;
  };

  const ownMessage = user && user.id === ownerId;

  return (
    <div className="Message__wrapper">
      <div
        className={`Message__container ${
          ownMessage ? 'Message__own' : 'Message__participant'
        }`}
      >
        {text}
        <div className="Message__timestamp">{time(createdAt)}</div>
      </div>
    </div>
  );
}

Message.propTypes = {};

export default Message;
