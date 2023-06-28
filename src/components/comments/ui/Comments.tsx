import React, { FC, useEffect } from "react";
import { CommentsPropsType, CommentsType } from "../model/interface";
import styles from "./comments.module.css";
import { PostsType } from "../../posts";
import User from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";

const Comments: FC<CommentsPropsType> = (props) => {
  const {
    commentsState,
    setCommentsState,
    currentPost,
    setCurrentPost,
    currentUser,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    // return () => {
    //   setCommentsState([] as Array<CommentsType>);
    //   setCurrentPost([] as PostsType);
    // };
  }, [commentsState]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.user_info_wrapper}>
        <button className={styles.close_btn} onClick={() => navigate("/posts")}>
          x
        </button>

        <img className={styles.user_img} src={User} alt="user_pic" />
        <h2 className={styles.user_name}>{currentUser.name},</h2>
        <p className={styles.user_email}>{currentUser.company.name}</p>
      </div>
      <div className={styles.post_wrapper}>
        <div className={styles.post}>
          <h2 className={styles.post_heading}>{currentPost.title}</h2>
          <p className={styles.post_text}>{currentPost.body}</p>
        </div>
        <div className={styles.comments_wrapper}>
          <h2 className={styles.comments_wrapper_heading}>Comments</h2>
          {commentsState?.map((comment) => (
            <div className={styles.comment} key={comment.id}>
              <p className={styles.comment_heading}>{comment.name}</p>
              <p className={styles.comment_body}>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
