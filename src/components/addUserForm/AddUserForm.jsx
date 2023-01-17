import React, { useRef } from "react";
import MyButton from "../UI/button/MyButton";
import FormInput from "../UI/form-input/FormInput";
import styles from "./AddUserForm.module.css";

const AddUserForm = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name && age) {
      onAddUser(name, age);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <form className={styles.addUserContainer}>
      <FormInput label="UserName" ref={nameInputRef} inputType="text" />
      <FormInput label="Age (Years)" ref={ageInputRef} inputType="number" />
      <MyButton onClick={addUserHandler}>Add User</MyButton>
    </form>
  );
};

export default AddUserForm;
