import "./App.css";
import { useEffect, useState } from "react";
import { posts, users } from "./services";
import Posts from "./components/posts/ui/Posts";
import { PostsPropsType } from "./components/posts";
import { Users, UsersPropsType } from "./components/users";

function App() {
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
    <div className="app_wrapper">
      <Users usersState={usersState} setPostsState={setPostsState} />
      <Posts postsState={postsState} />
    </div>
  );
}

export default App;
