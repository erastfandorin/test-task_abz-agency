import React, { useState, useRef, useEffect } from 'react';

import coveImg from '../../../assets/img/photo-cover.svg';

const defaultTooltips = {
  name: false,
  position: false,
  email: false,
};
const nameString = 'hi their';
const emailString = 'Salvador Stewart Flynn Thomas Salva4444444444444';

function User() {
  const ref = useRef(null);
  const [tooltips, setTooltips] = useState(defaultTooltips);

  // get text width
  const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    context.font = font || getComputedStyle(document.body).font;

    return context.measureText(text).width;
  };

  useEffect(() => {
    // get element width
    const elementWidth = ref.current ? ref.current.offsetWidth : 0;

    const addTooltips = (name, email, position) => {
      const stringList = [
        ['name', name],
        ['email', email],
        ['position', position],
      ];
      const newTooltips = tooltips;

      stringList.forEach(str => {
        const textWidth = getTextWidth(str[1]);
        // add tooltips if needs
        if (elementWidth < textWidth) {
          newTooltips[str[0]] = true;
        }
      });
      setTooltips({ ...newTooltips });
    };
    addTooltips(nameString, emailString, emailString);
  }, []);

  const addTooltip = text => <span className="tooltip-text">{text}</span>;

  return (
    <li className="users__list-item card" ref={ref}>
      <ul className="card__list">
        <li className="card__photo">
          <img src={coveImg} alt="User" />
        </li>
        <li className="card__name tooltip">
          <span className="card__text">{nameString}</span>
          {tooltips.name ? addTooltip(nameString) : ''}
        </li>
        <li className="card__position tooltip">
          <span className="card__text">{emailString}</span>
          {tooltips.email ? addTooltip(emailString) : ''}
        </li>
        <li className="card__email tooltip">
          <a href="mailto:nowhere@mozilla.org">444444</a>
        </li>
        <li className="card__number">
          <a href="tel:+491570156">+38 (098) 278 76 24</a>
        </li>
      </ul>
    </li>
  );
}

export default User;
