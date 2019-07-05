import React from 'react';
import s from './Avatar.module.scss';
import { AvatarColor } from '../../services';

function Avatar({ fullName, avatar }) {
  function setInitials() {
    return fullName
      .split(' ')
      .map((word) => word[0])
      .join('');
  }

  const backgroundStyle = {
    backgroundImage: avatar ? `url(${avatar})` : 'none',
    backgroundColor: avatar ? 'transparent' : `${AvatarColor.color}`,
  };

  const initials = setInitials();

  return (
    <div style={backgroundStyle} className={s.Avatar}>
      {initials}
    </div>
  );
}

export default Avatar;
