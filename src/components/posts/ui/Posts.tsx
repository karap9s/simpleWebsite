import React, { FC } from "react";
import { PostsPropsType } from "../model/interface";
import styles from "./posts.module.css";
import { useNavigate } from "react-router-dom";
import { getComments } from "../../../services";

const Posts: FC<PostsPropsType> = (props) => {
  const { postsState, setCommentsState } = props;
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
                setCommentsState(data.data);
                navigate("/comments");
                console.log(data.data);
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
