import React from "react";
import UserCard from "../userCard/UserCard";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <ul className={styles.userList}>
      {users.map((user) => (
        <UserCard name={user.name} age={user.age} key={user.id}/>
      ))}
    </ul>
  );
};

export default UserList;
