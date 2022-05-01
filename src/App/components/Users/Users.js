import React, { useEffect, useState } from 'react';

import User from './User/User';
import abzTestApi from '../../services/api/api';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const result = await abzTestApi.getUsers();
    // refactor: add sorted
    setUsers([...users, ...result]);
  }

  // console.log(users)

  return (
    <section className="users" id="users">
      <h2 className="users__heading heading">Working with GET request</h2>
      <ul className="users__list">
        {users.map(user => (
          <User
            key={user.id}
            photo={user.photo}
            name={user.name}
            email={user.email}
            phone={user.phone}
            position={user.position}
          />
        ))}
      </ul>
      <button type='button' className="btn" onClick={getUsers}>
        Show more
      </button>
    </section>
  );
}

export default Users;
