import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

const Post = () => {
  const [postDetails, setPostDetails] = useState();
  const [comments, setComments] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPostDetails(json));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [id]);

  return postDetails && comments ? (
    <div>
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Forum</span>
  <Link to="/"><button type="button" className="btn btn-outline-secondary">Home</button></Link>

  </div>

</nav>
<div id="posts">
      <h5>{postDetails.title}</h5>
      < hr />
      <p>{postDetails.body}</p>
      </div>
      <p id="comment">Comments:</p>
      
      {comments.map((comment, id) => {
        return (
          <div key={id}>
            <p id="#body"> {comment.body} </p>
            <div id="author">
            <p id="commentname">Written by: {comment.name}</p>
            <p>email: {comment.email}</p>
            </div>
            < hr />   
          </div>
        );
      })}
      <p>
        <strong>Posted by userId:</strong> {postDetails.userId}
      </p>
    </div>
  ) : (
    <p>"No data yet...Please wait"</p>
  );
};

export default Post;
