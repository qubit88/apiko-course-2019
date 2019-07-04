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
    <div
      onMouseEnter={() => handleMouseEnter()}
      onClick={() => handleMouseClick()}
      className="AvatarContainer"
    >
      {user && user.fullName ? (
        <>
          <div className="AvatarContainer__avatar-image">
            <Avatar fullName={user.fullName} avatar={user.avatar} />
          </div>

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
      props.handleHideInfo();
    },
  }),
);

export default enhancer(AvatarContainer);
