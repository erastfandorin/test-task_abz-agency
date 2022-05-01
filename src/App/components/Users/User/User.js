import React, { useState, useRef, useEffect } from 'react';
import coveImg from '../../../assets/img/photo-cover.svg';
import { getTextWidth } from '../../../helpers/utilities';

function User({photo, name, email, phone, position}) {
  const ref = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);

  const userImg = photo ?? coveImg;
  const phoneHref = `tel:${phone}`;
  const emailHref = `mailto:${email}`;

  useEffect(() => {
    const elemWidth = ref.current ? ref.current.offsetWidth : 0;
    setElementWidth(elemWidth);
  }, []);

  const checkTooltipNeed = (string) => {
    const textWidth = getTextWidth(string);
    if (elementWidth < textWidth) {
      return true;
    }
    return false;
  };

  const addTooltip = text => <span className="tooltip-text">{text}</span>;

  return (
    <li className="users__list-item card" ref={ref}>
      <ul className="card__list">
        <li className="card__photo">
          <img src={userImg} alt="User" />
        </li>
        <li className="card__name tooltip">
          <span className="card__text">{name}</span>
          {checkTooltipNeed(name) ? addTooltip(name) : ''}
        </li>
        <li className="card__position tooltip">
          <span className="card__text">{position}</span>
          {checkTooltipNeed(position) ? addTooltip(position) : ''}
        </li>
        <li className="card__email tooltip">
          <a href={emailHref}>{email}</a>
          {checkTooltipNeed(email) ? addTooltip(email) : ''}
        </li>
        <li className="card__number">
          <a href={phoneHref}>{phone}</a>
        </li>
      </ul>
    </li>
  );
}

export default User;
