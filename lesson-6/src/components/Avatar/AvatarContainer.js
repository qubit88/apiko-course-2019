import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import { Avatar, UserInfo } from '../../components';
import './AvatarContainer.css';

function AvatarContainer({ user, handleClick, className }) {
  return (
    <div onClick={() => handleClick()} className="AvatarContainer">
      {user && user.fullName ? (
        <>
          <Avatar fullName={user.fullName} />
          <UserInfo className={className} />
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
  withStateHandlers(
    {
      className: '',
    },
    {
      handleInfoVisibilityChange: (state) => () => ({
        className: state.className ? '' : 'UserInfo--visible',
      }),
    },
  ),
  withHandlers({
    handleClick: (props) => () => {
      props.handleInfoVisibilityChange();
    },
  }),
);

export default enhancer(AvatarContainer);
