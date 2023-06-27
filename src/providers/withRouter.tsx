import { Route, Routes, Navigate } from "react-router-dom";
import { Posts, PostsPropsType } from "../components/posts";
import { useEffect, useState } from "react";
import { UsersPropsType } from "../components/users";
import { posts, users } from "../services";
import App from "../components/app/ui/App";

const withRouter = () => {
  const [postsState, setPostsState] = useState<Array<PostsPropsType>>([]);
  const [usersState, setUsersState] = useState<Array<UsersPropsType>>([]);
  const [commentsState, setCommentsState] = useState([]);

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
          />
        }
      />
    </Routes>
  );
};

export default withRouter;
