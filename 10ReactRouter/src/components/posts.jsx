import { MdDelete } from "react-icons/md";
import { PostLists } from "../store/post-list-store";
import { useContext } from "react";

function Posts({ post }) {
  const { deletePost } = useContext(PostLists);
  return (
    <div className="card mt-2 post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger del"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        <div>
          {post.tags.map((tag, idx) => (
            <span key={idx} className="badge text-bg-primary m-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success m-0 p-1" role="alert">
          {`${post.reactions.likes} 👍(likes)`}
        </div>
      </div>
    </div>
  );
}

export default Posts;
