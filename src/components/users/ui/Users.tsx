import React, { FC } from "react";
import { Select } from "antd";
import { UsersPropsType } from "../model/interface";
import styles from "./users.module.css";

const Users: FC<{ usersState: Array<UsersPropsType> }> = (props) => {
  const { usersState } = props;

  return (
    <div className={styles.users_wrapper}>
      <h2 className={styles.heading}>Users:</h2>
      <Select
        className={styles.select}
        options={usersState.map((user) => {
          return { value: user.id, label: user.name };
        })}
      />
    </div>
  );
};

export default Users;
