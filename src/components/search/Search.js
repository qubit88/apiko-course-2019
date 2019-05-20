import React from "react";

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

export default Search;
