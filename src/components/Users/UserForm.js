import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./css/UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const usernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  //   // console.log(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setEnteredAge(event.target.value);
  //   // console.log(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };

    console.log("newUSer:", newUser);

    props.onAddUser(newUser);

    // setEnteredAge("");
    // setEnteredUsername("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              id="username"
              // onChange={usernameHandler}
              // value={enteredUsername}
              ref={nameInputRef}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              // onChange={ageHandler}
              // value={enteredAge}
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserForm;
