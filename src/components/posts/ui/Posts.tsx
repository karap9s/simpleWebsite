import React, { FC } from "react";
import { PostsPropsType } from "../model/interface";
import styles from "./posts.module.css";

const Posts: FC<{ postsState: Array<PostsPropsType> }> = (props) => {
  const { postsState } = props;

  return (
    <div className={styles.wrapper}>
      {postsState?.map((post) => (
        <div className={styles.post} key={post.id} onClick={() => {}}>
          <h2 className={styles.post_heading}>{post.title}</h2>
          <p className={styles.post_text}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
