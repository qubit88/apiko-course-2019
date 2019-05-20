import React from "react";
import PostList from "./components/PostList";
import MoreButton from "./components/MoreButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      incrementLimit: 10
    };
    this.fetchData = this.fetchData.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(data =>
        this.setState(prevState => {
          return { posts: data.slice(0, prevState.incrementLimit + 1) };
        })
      );
  }

  onClick() {
    this.setState(prevState => {
      return { incrementLimit: prevState.incrementLimit + 10 };
    });
    this.fetchData();
  }
  render() {
    return (
      <div className="App">
        <PostList posts={this.state.posts} />
        <MoreButton onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
