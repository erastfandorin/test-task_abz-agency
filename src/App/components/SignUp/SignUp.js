import React, { useState } from 'react';

import TextField from './TextField/TextField';
import RadioBtn from './RadioBtn/RadioBtn';
import FileField from './FileField/FileField';

const defaultTextFields = [
  { key: '1', name: 'name', value: '', label: 'Your name', helpText: '' },
  { key: '2', name: 'email', value: '', label: 'Email', helpText: '' },
  {
    key: '3',
    name: 'phone',
    value: '',
    label: 'Phone',
    helpText: '+38 (XXX) XXX - XX - XX',
  },
];
const defaultRadioBtns = [
  { key: '1', name: 'frontend', label: 'Frontend developer', isChecked: true },
  { key: '2', name: 'backend', label: 'Backend developer', isChecked: false },
  { key: '3', name: 'designer', label: 'Designer', isChecked: false },
  { key: '4', name: 'qa', label: 'QA', isChecked: false },
];

function SignUp() {
  const [textFields, setTextFields] = useState(defaultTextFields);
  const [radioBtns, setRadioBtns] = useState(defaultRadioBtns);

  const handleChangeTextField = e => {
    textFields.forEach((item, index) => {
      if (item.name === e.target.name) {
        const newTextFields = [...textFields];
        newTextFields[index].value = e.target.value;
        setTextFields(newTextFields);
      }
    });
  };
  const handleChangeRadioBtn = e => {
    const newTextFields = [];
    radioBtns.forEach((item, index) => {
      // reset all radio btns
      newTextFields.push(item);
      newTextFields[index].isChecked = false;

      if (item.name === e.target.name) {
        newTextFields[index].isChecked = true;
      }
    });
    setRadioBtns(newTextFields);
  };
  const handleChangeFileField = e => {
    //
    //
    //
  };

  return (
    <section className="sign-up" id="sign-up">
      <h2 className="sign-up__heading heading">Working with POST request</h2>
      <form action="#" className="sign-up__form">
        <ul className="sign-up__form-field-list">
          {textFields.map(input => (
            <TextField
              key={input.key}
              name={input.name}
              value={input.value}
              label={input.label}
              helpText={input.helpText}
              handleChangeTextField={handleChangeTextField}
            />
          ))}
          <li className="sign-up__form-field sign-up__select-position select-position">
            <fieldset>
              <legend className="select-position__heading">
                Select your position
              </legend>
              <ul className="select-position__radio-btn-list">
                {radioBtns.map(btn => (
                  <RadioBtn
                    key={btn.key}
                    name={btn.name}
                    label={btn.label}
                    isChecked={btn.isChecked}
                    handleChangeRadioBtn={handleChangeRadioBtn}
                  />
                ))}
              </ul>
            </fieldset>
          </li>
          <FileField handleChangeFileField={handleChangeFileField} />
        </ul>
        <button type="submit" className="sign-up__form-btn btn btn-disable ">
          Sign up
        </button>
      </form>
    </section>
  );
}

export default SignUp;
