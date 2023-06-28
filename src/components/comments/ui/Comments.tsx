import React, { FC, useState } from "react";
import { CommentsPropsType } from "../model/interface";
import styles from "./comments.module.css";
import User from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import sendComment from "../../../services/api/sendComment";

const Comments: FC<CommentsPropsType> = (props) => {
  const { commentsState, setCommentsState, currentPost, currentUser } = props;

  const [commentText, setCommentText] = useState<string>("");

  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendComment({
        postId: currentPost.id,
        email: "MyCoolEmail@gmail.com",
        body: commentText,
      }).then((data) => {
        if (data.status === 201) {
          setCommentsState((prev) => [...prev, data.data]);
          setCommentText("");
        }
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.user_info_wrapper}>
        <button className={styles.close_btn} onClick={() => navigate("/posts")}>
          x
        </button>

        <img className={styles.user_img} src={User} alt="user_pic" />
        <h2 className={styles.user_name}>{currentUser.name},</h2>
        <p>{currentUser.company.name}</p>
      </div>
      <div className={styles.post_wrapper}>
        <div className={styles.post}>
          <h2 className={styles.post_heading}>{currentPost.title}</h2>
          <p className={styles.post_text}>{currentPost.body}</p>
        </div>
        <div className={styles.comments_wrapper}>
          <h2 className={styles.comments_wrapper_heading}>Comments</h2>
          {commentsState?.map((comment) => (
            <div
              className={styles.comment}
              key={`${comment.id}-${comment.body}`}
            >
              <p className={styles.comment_heading}>{comment.name}</p>
              <p className={styles.comment_body}>{comment.body}</p>
            </div>
          ))}
          <input
            value={commentText}
            onKeyDown={handleKeyDown}
            onChange={handleInput}
            className={styles.comments_wrapper_input}
            type="text"
            placeholder="Leave your comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
