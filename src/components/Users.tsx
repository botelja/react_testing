import React from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface UsersProps {
  users: User[];
}

export const Users: React.FC<UsersProps> = ({users}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null;

    const UserRow: React.FC<{user: User, index: number}> = ({user, index}) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
              </tr>
          )
    }

    const userTable = users.map((user,index) => <UserRow key={index} user={user} index={index} />);

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}
