import React from 'react';

import UserForm from './components/Users/UserForm';
import NewUser from './components/Users/NewUser';

const App = props => {

  const user = {};

  const addUser = () => {
    user.push(props.newUser);
  }

  return (
    <div>
      <UserForm onSubmit={addUser}/>
      <NewUser />
    </div>
  );
}

export default App;
