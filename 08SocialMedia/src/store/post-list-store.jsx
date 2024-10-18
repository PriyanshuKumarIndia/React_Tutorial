import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const dispatcher = (currPostList, action) => {
  let new_list = currPostList;
  if (action.type === "delete_post") {
    new_list = currPostList.filter((post) => post.id !== action.payload.postID);
  }

  return new_list;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    dispatcher,
    default_post_list
  );

  const addPost = () => {};
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
    <PostLists.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

const default_post_list = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends, I am going to mumbai for my vacations. Hope to enjoy a lot.",
    reactions: 2,
    userID: "user-9",
    tags: ["mumbai", "vacation", "enjoying"],
  },
  {
    id: "2",
    title: "Got the degree",
    body: "Hi friends, finally passed and got the degree after 4 year of struggle",
    reactions: 5,
    userID: "user-7",
    tags: ["education", "collegelife", "enjoying"],
  },
];

export default PostListProvider;
