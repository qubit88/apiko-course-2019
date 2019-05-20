import React from "react";
import PropTypes from "prop-types";
import PostListItem from "./PostListItem";
import "./PostList.css";

function PostList(props) {
  const posts = props.posts.map(post => <PostListItem {...post} />);
  return <ul>{posts}</ul>;
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
