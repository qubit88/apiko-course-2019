import React from 'react';
import { connect } from 'react-redux';
import { Logout } from '../../components';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/router';
import './UserInfo.scss';
import { Avatar } from '../../components';

function UserInfo({ fullName, email, className }) {
  return (
    <div className={`UserInfo ${className}`}>
      <div className="UserInfo__top">
        <div className="UserInfo__data">
          <div className="UserInfo__avatar-wrapper">
            <div className="UserInfo__avatar">
              <Avatar fullName={fullName} />
            </div>
          </div>
          <div>
            <div className="UserInfo__name">{fullName}</div>
            <div className="UserInfo__email">{email}</div>
          </div>
        </div>
        <Link
          to={routes.editProfile}
          className="UserInfo__edit-profile"
        >
          edit profile
        </Link>
      </div>

      <div className="UserInfo__bottom">
        <Logout />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.viewer.user,
  };
}

const enhancer = connect(mapStateToProps);

export default enhancer(UserInfo);
