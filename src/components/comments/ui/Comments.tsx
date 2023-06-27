import React, { FC, useEffect } from "react";
import { CommentsPropsType } from "../model/interface";
import styles from "./comments.module.css";

const Comments: FC<{
  commentsState: Array<CommentsPropsType>;
  setCommentsState: (value: CommentsPropsType) => void;
}> = (props) => {
  const { commentsState, setCommentsState } = props;

  useEffect(() => {
    return () => {
      setCommentsState([] as CommentsPropsType);
    };
  }, []);
  return (
    <div>
      {commentsState?.map((comment) => (
        <div className={styles.comment}>{comment.name}</div>
      ))}
    </div>
  );
};

export default Comments;
