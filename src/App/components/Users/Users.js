import React from 'react';

import User from './User/User';

function Users() {
  return (
    <section className="users">
      <h2 className="users__heading heading">Working with GET request</h2>
      <ul className="users__list">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </ul>
      <a href="/" className="btn">
        Show more
      </a>
    </section>
  );
}

export default Users;
