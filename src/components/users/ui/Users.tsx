import React, { FC } from "react";
import { Select } from "antd";
import { UsersPropsType } from "../model/interface";
import styles from "./users.module.css";
import { posts } from "../../../services";
import { PostsPropsType } from "../../posts";

const Users: FC<{
  usersState: Array<UsersPropsType>;
  setPostsState: (id: Array<PostsPropsType>) => void;
}> = (props) => {
  const { usersState, setPostsState } = props;

  const handleChange = (value: string) => {
    posts(value).then((data) => {
      if (data.status === 200) setPostsState(data.data);
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Users:</h2>
      <Select
        className={styles.select}
        onChange={handleChange}
        options={usersState.map((user) => {
          return { value: user.id, label: user.name };
        })}
      />
    </div>
  );
};

export default Users;
