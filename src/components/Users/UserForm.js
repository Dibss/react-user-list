import React, {useState} from "react";

import styles from "./css/UserForm.module.css";

const UserForm = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = event => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = event => {

    event.preventDefault();

    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    }

    props.onSubmit(newUser);
  }

  return (
    <form className={styles.input} onSubmit={addUserHandler}>
      <div>
        <label htmlFor="">Username</label>
        <input type="text" id="username" onChange={usernameHandler}/>
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={ageHandler}/>
      </div>
      <button type="submit">Add user</button>
    </form>
  );
};

export default UserForm;
