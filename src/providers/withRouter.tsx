import { Route, Routes, Navigate } from "react-router-dom";
import { PostsType } from "../components/posts";
import { useEffect, useState } from "react";
import { UsersType } from "../components/users";
import { posts, users } from "../services";
import App from "../components/app/ui/App";
import { Comments, CommentsType } from "../components/comments";

const withRouter = () => {
  const [postsState, setPostsState] = useState<Array<PostsType>>([]);
  const [usersState, setUsersState] = useState<Array<UsersType>>([]);
  const [commentsState, setCommentsState] = useState<Array<CommentsType>>([]);
  const [currentPost, setCurrentPost] = useState<PostsType>({});
  const [currentUser, setCurrentUser] = useState<UsersType>({});

  useEffect(() => {
    posts().then((data) => {
      if (data.status === 200) setPostsState(data.data);
    });
    users().then((data) => {
      if (data.status === 200) setUsersState(data.data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route
        path="/posts"
        element={
          <App
            setPostsState={setPostsState}
            usersState={usersState}
            setUsersState={setUsersState}
            postsState={postsState}
            commentsState={commentsState}
            setCommentsState={setCommentsState}
            setCurrentPost={setCurrentPost}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route
        path="/comments"
        element={
          <Comments
            commentsState={commentsState}
            setCommentsState={setCommentsState}
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
            currentUser={currentUser}
          />
        }
      />
    </Routes>
  );
};

export default withRouter;
