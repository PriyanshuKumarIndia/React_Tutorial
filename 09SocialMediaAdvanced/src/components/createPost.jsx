import { useContext, useRef } from "react";
import { PostLists } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostLists);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnClick = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        reactions,
        userId: userID,
        tags,
      }),
    })
      .then((res) => res.json())
      .then(({ id, title, body, reactions, userId, tags }) => {
        addPost(id, title, body, reactions, userId, tags);
      });
  };

  return (
    <form className="create-post" onSubmit={handleOnClick}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          UserID
        </label>
        <input
          ref={userIDElement}
          type="text"
          className="form-control"
          id="user-id"
          placeholder="Enter UserID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post TITLE
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postContentElement}
          style={{ resize: "none" }}
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell me more about it"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionsElement}
          type="number"
          className="form-control"
          id="reactions"
          placeholder="your all reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Your Tags Here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your tags with spaces between them"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
