import React from "react";
import styles from './UserCard.module.css'

const UserCard = ({name, age}) => {
  return (
    <li className={styles.card}>
      {name} ({age} years old)
    </li>
  );
};

export default UserCard;
