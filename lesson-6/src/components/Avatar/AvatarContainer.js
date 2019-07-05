import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import { Avatar, UserInfo } from '../../components';
import './AvatarContainer.scss';

function AvatarContainer({
  user,
  handleMouseEnter,
  handleMouseClick,
  className,
}) {
  return (
    <div className="AvatarContainer">
      <div
        className="AvatarContainer__header"
        onMouseEnter={() => handleMouseEnter()}
        onClick={() => handleMouseClick()}
      >
        {user && user.fullName ? (
          <div className="AvatarContainer__avatar-image">
            <Avatar fullName={user.fullName} avatar={user.avatar} />
          </div>
        ) : (
          ''
        )}
      </div>
      {user && user.fullName ? (
        <UserInfo className={className} />
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
      handleShowInfo: (state) => () => ({
        className: 'UserInfo--visible',
      }),
      handleHideInfo: (state) => () => ({
        className: '',
      }),
    },
  ),
  withHandlers({
    handleMouseEnter: (props) => () => {
      props.handleShowInfo();
    },
    handleMouseClick: (props) => () => {
      props.className
        ? props.handleHideInfo()
        : props.handleShowInfo();
    },
  }),
);

export default enhancer(AvatarContainer);
