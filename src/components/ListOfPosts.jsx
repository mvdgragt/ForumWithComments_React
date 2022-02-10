import { Link } from "react-router-dom";

const ListOfPosts = ({ posts }) => {
  return (
    <div>
      <h2>Click on a post to read more...</h2>
      {posts &&
        posts.map((post, i) => {
          return (
            <Link key={i} to={{ pathname: `/post/${post.id}` }}>
              <div>
                <p>{post.title}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ListOfPosts;
