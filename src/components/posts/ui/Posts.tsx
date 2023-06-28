import React, { FC } from "react";
import { PostsPropsType } from "../model/interface";
import styles from "./posts.module.css";
import { useNavigate } from "react-router-dom";
import { getComments } from "../../../services";

const Posts: FC<PostsPropsType> = (props) => {
  const {
    postsState,
    setCommentsState,
    setCurrentPost,
    setCurrentUser,
    usersState,
  } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {postsState?.map((post) => (
        <div
          className={styles.post}
          key={post.id}
          onClick={() => {
            getComments(post.id).then((data) => {
              if (data.status === 200) {
                const findCurrentUser = usersState.filter(
                  (user) => user.id === post.userId
                );
                setCurrentUser(findCurrentUser[0]);
                setCurrentPost(post);
                setCommentsState(data.data);
                navigate("/comments");
              }
            });
          }}
        >
          <h2 className={styles.post_heading}>{post.title}</h2>
          <p className={styles.post_text}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
