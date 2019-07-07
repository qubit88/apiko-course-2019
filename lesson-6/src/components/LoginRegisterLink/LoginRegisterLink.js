import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoginRegisterLink.scss';

function LoginRegisterLink(props) {
  return (
    <div className="LoginRegisterLink">
      {props.text},{' '}
      <Link className="LoginRegisterLink__link" to={props.to}>
        {props.children}
      </Link>
    </div>
  );
}

LoginRegisterLink.propTypes = {};

export default LoginRegisterLink;
