import React, { useState, useEffect, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header  from './components/Header'
import {Users}  from './components/Users'
import DisplayBoard  from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser, User } from './services/UserService'

function App(): JSX.Element {
  const [user, setUser] = useState<User>({ firstName: '', lastName: '', email: '' });
  const [users, setUsers] = useState<User[]>([]);
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0);

  const userCreate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createUser(user)
      .then((response: any) => {
        console.log(response);
        setNumberOfUsers(numberOfUsers + 1);
      });
  }

  const fetchAllUsers = (): void => {
    getAllUsers()
      .then((users: User[]) => {
        console.log(users);
        setUsers(users);
        setNumberOfUsers(users.length);
      });
  }

  useEffect(() => {
    getAllUsers()
      .then((users: User[]) => {
        console.log(users);
        setUsers(users);
        setNumberOfUsers(users.length);
      });
  }, [])

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }
    
  return (
    <div className="App">
      <Header />
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser 
              user={user}
              onChangeForm={onChangeForm}
              createUser={userCreate}
            />
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
            />
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users} />
      </div>
    </div>
  );
}

export default App;
