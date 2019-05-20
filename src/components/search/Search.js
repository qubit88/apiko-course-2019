import React from "react";
import PropTypes from "prop-types";

function Search(props) {
  let { value, onChange } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder="search title or body"
    />
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
