import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([
    { id: 1, username: 'gokolo', age: 28 }
  ]);

  const addUserHandler = user => {
    setUserList(prevList => {
      user.id = prevList.length + 1;
      return [...prevList, user]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>

      <UsersList users={userList} />
    </div>
  );
}

export default App;
