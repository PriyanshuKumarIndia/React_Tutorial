function WelcomeMessage({ onGetPostsClick }) {
  return (
    <center className="mt-4 mb-5 ">
      <h1>No posts yet...</h1>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={onGetPostsClick}
      >
        Fetch posts from server
      </button>
    </center>
  );
}

export default WelcomeMessage;
