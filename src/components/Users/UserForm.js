import React, { useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import styles from "./css/UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
    // console.log(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
    // console.log(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    };

    console.log('newUSer:', newUser);

    props.onAddUser(newUser);

    setEnteredAge('');
    setEnteredUsername('');
  };

  const clickHandler = () => {

  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" id="username" onChange={usernameHandler} value={enteredUsername} />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" onChange={ageHandler} value={enteredAge} />
        </div>
        <Button type="submit" onClick={clickHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
