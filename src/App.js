import React, { useState } from "react";
import AddUserForm from "./components/addUserForm/AddUserForm";
import styles from "./App.module.css";
import UserList from "./components/userList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers([...users, { name, age, id: Math.random().toString() }]);
  };

  users.sort((a, b) => {
    return b.age - a.age;
  });

  return (
    <div className={styles.App}>
      <AddUserForm onAddUser={addUserHandler} />
      <UserList users={users}/>
    </div>
  );
};

export default App;
