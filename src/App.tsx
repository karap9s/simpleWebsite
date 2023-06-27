import "./App.css";
import { useEffect, useState } from "react";
import { posts } from "./services";
import Posts from "./components/posts/ui/Posts";
import { PostsPropsType } from "./components/posts";

function App() {
  const [postsState, setPostsState] = useState<Array<PostsPropsType>>([]);
  const [usersState, setUsersState] = useState([]);
  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    posts().then((data) => {
      if (data.status === 200) setPostsState(data.data);
    });
  }, []);

  return (
    <div className="app_wrapper">
      <Posts postsState={postsState} />
    </div>
  );
}

export default App;
