import React from 'react';
import s from './Avatar.module.scss';

function Avatar({ fullName }) {
  function setInitials() {
    return fullName
      .split(' ')
      .map((word) => word[0])
      .join(' ');
  }

  const initials = setInitials();

  return <div className={s.Avatar}>{initials}</div>;
}

export default Avatar;
