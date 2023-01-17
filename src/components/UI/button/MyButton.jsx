import React from "react";
import styles from "./MyButton.module.css";

const MyButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.myButton}>
      {children}
    </button>
  );
};

export default MyButton;
