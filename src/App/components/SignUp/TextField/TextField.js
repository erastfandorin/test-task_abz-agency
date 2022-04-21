import React from 'react';

function TextField({ name, value, label, helpText, handleChangeTextField }) {
  return (
    <li className="sign-up__form-field">
      <input
        id={name}
        className="sign-up__input input"
        type="text"
        name={name}
        value={value}
        autoComplete="off"
        placeholder=" "
        onChange={handleChangeTextField}
      />
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <p className="sign-up__helper-text">{helpText}</p>
    </li>
  );
}

export default TextField;
