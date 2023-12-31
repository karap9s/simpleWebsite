import React, { FC } from "react";
import { Select } from "antd";
import { UsersPropsType } from "../model/interface";
import styles from "./users.module.css";
import { posts } from "../../../services";

const Users: FC<UsersPropsType> = (props) => {
  const { usersState, setPostsState } = props;

  const handleChange = (value: string) => {
    posts(Number(value)).then((data) => {
      if (data.status === 200) setPostsState(data.data);
    });
  };

  return (
    <>
      <h2 className={styles.heading}>Users:</h2>
      <Select
        placeholder="Select user..."
        className={styles.select}
        onChange={handleChange}
        options={usersState.map((user) => {
          return { value: user.id, label: user.name };
        })}
      />
    </>
  );
};

export default Users;
