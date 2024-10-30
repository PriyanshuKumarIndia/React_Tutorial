import { Form, redirect } from "react-router-dom";

function CreatePost() {
  // const { addPost } = useContext(PostLists);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          UserID
        </label>
        <input
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your tags with spaces between them"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
    });
  return redirect("/create-post");
};

export default CreatePost;
