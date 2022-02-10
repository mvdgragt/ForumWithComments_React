import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
      <Link to="/">Back to startpage</Link>

      <p>{postDetails.title}</p>
      <p>{postDetails.body}</p>
      <p>Comments:</p>
      <hr />
      {comments.map((comment, id) => {
        return (
          <div key={id}>
            <li> {comment.name}</li>
            <li> {comment.email}</li>
            <li> {comment.body}</li>
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
