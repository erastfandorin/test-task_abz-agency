import React from 'react';

import coveImg from '../../../assets/img/photo-cover.svg';

function User() {
  return (
    <li className="users__list-item card">
      <ul className="card__list">
        <li className="card__photo">
          <img src={coveImg} alt="User" />
        </li>
        <li className="card__name">
          Salvador Stewart Flynn Thomas Salva4444444444444
        </li>
        <li className="card__position">
          Leading specialist of the department4444444444
        </li>
        <li className="card__email">
          <a href="mailto:nowhere@mozilla.org">
            JeromeKlarkaJeromeKlarka19233623444444444
          </a>
        </li>
        <li className="card__number">
          <a href="tel:+491570156">+38 (098) 278 76 24</a>
        </li>
      </ul>
    </li>
  );
}

export default User;
