import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../../scenes/router';
import { authOperations } from '../../modules/auth';
import s from './Logout.module.scss';

function Logout({ handleLogout }) {
  return (
    <div className={s.logout} onClick={handleLogout}>
      logout
    </div>
  );
}

const mapDispatchToProps = {
  logout: authOperations.logout,
};

const enhancer = compose(
  withRouter,
  connect(
    undefined,
    mapDispatchToProps,
  ),
  withHandlers({
    handleLogout: (props) => async () => {
      await props.logout();
    },
  }),
);

export default enhancer(Logout);
