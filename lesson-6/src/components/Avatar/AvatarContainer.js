import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { Avatar, UserInfo } from '../../components';
import './AvatarContainer.css';

function AvatarContainer({ user, handleClick }) {
  return (
    <div onClick={(evt) => handleClick()} className="AvatarContainer">
      {user && user.fullName ? (
        <>
          <Avatar fullName={user.fullName} />
          <UserInfo />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.viewer.user,
  };
}

const enhancer = compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: (props) => (el) => {
      el.classList.toggle('AvatarContainer--info-visible');
    },
  }),
);

export default enhancer(AvatarContainer);
