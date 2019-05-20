import React from "react";
import PropTypes from "prop-types";

function MoreButton(props) {
  return <button onClick={props.onClick}>More</button>;
}

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MoreButton;
