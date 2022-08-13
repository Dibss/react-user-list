import React, {useState} from 'react';

import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';

const userArr = {};

const App = props => {

  const [users, setUsers] = useState(userArr);


  const addUserHandler = newUser => {
    console.log('newUser on app.js:', newUser);
    setUsers((prevUsers) => {
      console.log('prevUsers:', prevUsers);
      return [newUser, ...prevUsers];
    })
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UserList list={users}/>
    </div>
  );
}

export default App;
