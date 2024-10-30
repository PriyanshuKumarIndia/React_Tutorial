import Posts from "./posts";
import { PostLists } from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMessage from "./welcomMesaage";
import LoadingSpinner from "./loadingSpinner";
import { useLoaderData } from "react-router-dom";

function PostList() {
  // const { postList, fetching } = useContext(PostLists);
  const postList = useLoaderData();

  return (
    <>
      {!postList.length && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Posts key={post.id} post={post}></Posts>
      ))}
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
