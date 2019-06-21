import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Logout } from '../../components';
import './UserInfo.scss';
import { Avatar } from '../../components';

function UserInfo({ handleMouseLeave, fullName, email }) {
  return (
    <div
      onMouseLeave={(evt) => handleMouseLeave(evt.target)}
      className="UserInfo"
    >
      <div>
        <div className="UserInfo__avatar">
          <Avatar fullName={fullName} />
        </div>
        <div>
          <div className="UserInfo__name">{fullName}</div>
          <div className="UserInfo__email">{email}</div>
        </div>
      </div>

      <Logout />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.viewer.user,
  };
}

const enhancer = compose(
  connect(mapStateToProps),
  withHandlers({
    handleMouseLeave: (props) => (el) => {
      el.classList.remove('UserInfo--visible');
    },
  }),
);

export default enhancer(UserInfo);
