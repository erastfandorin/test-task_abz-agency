import React, { useEffect, useState } from 'react';

import User from './User/User';
import abzTestApi from '../../services/api/api';

function Users({ isFormSended }) {
  const [users, setUsers] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    getUsers();
  }, [isFormSended]);

  const getUsers = async () => {
    if (isFormSended) {
      resetUserList();
    }

    const result = await abzTestApi.getUsers();
    setIsLastPage(result.lastPage);
    if (!isFormSended) {
      setUsers([...users, ...result.users]);
    }
  };

  const resetUserList = async () => {
    await abzTestApi.resetUsersLink();
    setUsers([]);
  };

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
      {!isLastPage && (
        <button type="button" className="btn" onClick={getUsers}>
          Show more
        </button>
      )}
    </section>
  );
}

export default Users;
