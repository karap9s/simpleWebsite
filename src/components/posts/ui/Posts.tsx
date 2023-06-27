import React, { FC } from "react";
import { PostsPropsType } from "../model/interface";
import styles from "./posts.module.css";
import { useNavigate } from "react-router-dom";

const Posts: FC<{ postsState: Array<PostsPropsType> }> = (props) => {
  const { postsState } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {postsState?.map((post) => (
        <div
          className={styles.post}
          key={post.id}
          onClick={() => navigate("/comments")}
        >
          <h2 className={styles.post_heading}>{post.title}</h2>
          <p className={styles.post_text}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
