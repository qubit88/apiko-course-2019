import React from "react";
import "./App.css";
import PostList from "./components/postList/PostList";
import MoreButton from "./components/moreButton/MoreButton";
import Loading from "./components/loading/Loading";
import Search from "./components/search/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      incrementLimit: 10,
      isLoading: true,
      searchTerm: ""
    };
    this.fetchData = this.fetchData.bind(this);
    this.onClick = this.onClick.bind(this);
    this.limitPosts = this.limitPosts.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(data =>
        this.setState(prevState => {
          return {
            posts: data,
            isLoading: false
          };
        })
      );
  }

  limitPosts(posts) {
    return posts.slice(0, this.state.incrementLimit);
  }

  searchPost(post) {
    return (
      post.title.includes(this.state.searchTerm) ||
      post.body.includes(this.state.searchTerm)
    );
  }

  onClick() {
    this.setState({
      incrementLimit: this.state.incrementLimit + 10
    });
  }
  onSearch(searchTerm) {
    this.setState({
      searchTerm
    });
  }
  render() {
    const { posts, isLoading, searchTerm } = this.state;
    const filteredPosts = searchTerm
      ? posts.filter(this.searchPost)
      : this.limitPosts(posts);

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearch} />
        <PostList posts={filteredPosts} />
        <MoreButton onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
