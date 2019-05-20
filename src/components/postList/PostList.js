import React from "react";
import PropTypes from "prop-types";
import PostListItem from "../postListItem/PostListItem";
import "./PostList.css";

function PostList(props) {
  const posts = props.posts.map(({ id, title, body }) => (
    <PostListItem key={id} id={id} title={title} body={body} />
  ));
  return <ul>{posts}</ul>;
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
