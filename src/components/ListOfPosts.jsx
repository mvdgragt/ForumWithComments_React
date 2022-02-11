import { Link } from "react-router-dom";
import './Post.css'

const ListOfPosts = ({ posts }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Forum</span>
  </div>

</nav>
      <p id="subheader">Click on a post to read its comments</p>
      {posts &&
        posts.map((post, i) => {
          return (
            <Link key={i} to={{ pathname: `/post/${post.id}` }}>
              <ul>
              <li id="posts">{post.title}</li>
              </ul>
            </Link>
          );
        })}
    </div>
  );
};

export default ListOfPosts;
