import React from 'react';

function RadioBtn({ name, label, isChecked, handleChangeRadioBtn }) {
  return (
    <li>
      <input
        id={name}
        type="radio"
        name={name}
        checked={isChecked}
        onChange={handleChangeRadioBtn}
      />
      <label htmlFor={name}>{label}</label>
    </li>
  );
}

export default RadioBtn;
