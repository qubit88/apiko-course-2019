import React from "react";
import PropTypes from "prop-types";

class PostListItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.id === this.props.id &&
      nextProps.title === this.props.title &&
      nextProps.body === this.props.body
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { id, title, body } = this.props;
    return (
      <li>
        <h3>
          <span>{id}.</span> {title}
        </h3>
        <p>{body}</p>
      </li>
    );
  }
}

PostListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default PostListItem;
