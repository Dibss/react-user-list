import React, {useState} from 'react';

import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';

// let userArr = [];

const App = props => {

  const [users, addNewUser] = useState([]);

  const addUserHandler = newUser => {
    // console.log('newUser on app.js:', newUser);
    addNewUser((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UserList list={users}/>
    </div>
  );
}

export default App;
