import React from "react";
import PropTypes from "prop-types";
import "./MoreButton.css";

function MoreButton(props) {
  return (
    <button className="MoreButton" onClick={props.onClick}>
      More
    </button>
  );
}

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MoreButton;
