import "./App.css";
import { FC, useEffect, useState } from "react";
import { posts, users } from "../../../services";
import Posts from "../../posts/ui/Posts";
import { PostsPropsType } from "../../posts";
import { Users, UsersPropsType } from "../../users";
import { AppPropsType } from "../model/interface";

const App: FC<AppPropsType> = (props) => {
  const { postsState, setPostsState, usersState, setUsersState } = props;

  useEffect(() => {
    posts().then((data) => {
      if (data.status === 200) setPostsState(data.data);
    });
    users().then((data) => {
      if (data.status === 200) setUsersState(data.data);
    });
  }, []);

  return (
    <div className="app_wrapper">
      <Users usersState={usersState} setPostsState={setPostsState} />
      <Posts postsState={postsState} />
    </div>
  );
};

export default App;
