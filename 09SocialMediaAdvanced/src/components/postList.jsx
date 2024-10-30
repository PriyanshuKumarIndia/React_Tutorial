import Posts from "./posts";
import { PostLists } from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMessage from "./welcomMesaage";
import LoadingSpinner from "./loadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostLists);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && !postList.length && <WelcomeMessage></WelcomeMessage>}
      {!fetching &&
        postList.map((post) => <Posts key={post.id} post={post}></Posts>)}
    </>
  );
}

export default PostList;
