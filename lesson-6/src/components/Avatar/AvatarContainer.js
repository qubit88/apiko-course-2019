import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import { Avatar, UserInfo } from '../../components';
import './AvatarContainer.scss';

function AvatarContainer({ user, handleMouseEnter, className }) {
  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      className="AvatarContainer"
    >
      {user && user.fullName ? (
        <>
          <div className="AvatarContainer__avatar-image">
            <Avatar fullName={user.fullName} />
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
      handleInfoVisibilityChange: (state) => () => ({
        className: state.className ? '' : 'UserInfo--visible',
      }),
    },
  ),
  withHandlers({
    handleMouseEnter: (props) => () => {
      props.handleInfoVisibilityChange();
    },
  }),
);

export default enhancer(AvatarContainer);
