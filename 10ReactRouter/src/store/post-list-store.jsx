import { createContext, useEffect, useReducer, useState } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const dispatcher = (currPostList, action) => {
  let new_list = currPostList;
  if (action.type === "delete_post") {
    new_list = currPostList.filter((post) => post.id !== action.payload.postID);
  } else if (action.type === "add_post") {
    new_list = [action.payload.posts, ...currPostList];
  } else if (action.type === "add_Initial_posts") {
    new_list = action.payload.posts;
  }
  return new_list;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(dispatcher, []);
  const [fetching, setfetching] = useState(false);

  const addPost = (posts) => {
    const action = {
      type: "add_post",
      payload: {
        posts,
      },
    };
    dispatchPostList(action);
  };

  const addInitialPosts = (posts) => {
    const action = {
      type: "add_Initial_posts",
      payload: {
        posts,
      },
    };
    dispatchPostList(action);
  };

  const deletePost = (postID) => {
    const action = {
      type: "delete_post",
      payload: {
        postID,
      },
    };

    dispatchPostList(action);
  };

  return (
    <PostLists.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostLists.Provider>
  );
};

export default PostListProvider;
