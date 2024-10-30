import Posts from "./posts";
import { PostLists } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./welcomMesaage";
import LoadingSpinner from "./loadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostLists);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });

    return () => {
      console.log("Aborted..");
      controller.abort();
    };
  }, []);

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
