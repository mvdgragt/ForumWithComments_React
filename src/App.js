import { useEffect, useState } from "react";
import ListOfPosts from "./components/ListOfPosts";
import Post from "./components/Post";
import { Switch, Route,Link } from "react-router-dom";

// styles
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ListOfPosts posts={posts} comments={comments} />}
        />
        <Route
          path="/post/:id"
          render={() => <Post post={posts} comments={comments} />}
        />
      </Switch>
    </div>
  );
}
