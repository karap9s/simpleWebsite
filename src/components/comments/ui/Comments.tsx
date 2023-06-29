import React, { FC, useState } from "react";
import { CommentsPropsType } from "../model/interface";
import styles from "./comments.module.css";
import User from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import sendComment from "../../../services/api/sendComment";
import { notification } from "antd";

const Comments: FC<CommentsPropsType> = (props) => {
  const { commentsState, setCommentsState, currentPost, currentUser } = props;

  const [commentText, setCommentText] = useState<string>("");

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api["success"]({
      message: "Success",
      description: "Your message has been successfully sent!",
    });
  };

  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendComment({
        postId: (currentPost as any).id,
        email: "MyCoolEmail@gmail.com",
        body: commentText,
      }).then((data) => {
        if (data.status === 201) {
          setCommentsState((prev) => [...prev, data.data]);
          setCommentText("");
          openNotificationWithIcon("success");
        }
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {contextHolder}
      {commentsState.length > 0 && (
        <>
          <div className={styles.user_info_wrapper}>
            <button
              className={styles.close_btn}
              onClick={() => navigate("/posts")}
            >
              x
            </button>
            <img className={styles.user_img} src={User} alt="user_pic" />
            <h2 className={styles.user_name}>{(currentUser as any).name},</h2>
            <p>{(currentUser as any).company.name}</p>
          </div>
          <div className={styles.post_wrapper}>
            <div className={styles.post}>
              <h2 className={styles.post_heading}>
                {(currentPost as any).title}
              </h2>
              <p className={styles.post_text}>{(currentPost as any).body}</p>
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
        </>
      )}
      {commentsState.length === 0 && (
          <div className={styles.notFound}>
            <p className={styles.notFound_text}>Not found any post :(</p>
            <button
                onClick={() => navigate("/posts")}
                className={styles.notFound_back}
            >
              Back to posts page?
            </button>
          </div>
      )}
    </div>
  );
};

export default Comments;
