import Posts from "./posts";
import { PostLists } from "../store/post-list-store";
import { useContext } from "react";

function PostList() {
  const { postList } = useContext(PostLists);

  return (
    <>
      {postList.map((post) => (
        <Posts key={post.id} post={post}></Posts>
      ))}
    </>
  );
}

export default PostList;

// className="d-flex w-full justify-content-evenly"
