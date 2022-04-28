import React, { useState } from 'react';
import Input from './Input/Input';
import withFormValidate from '../HOC/withFormValidate';

const Position = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DESIGNER: 'designer',
  QA: 'qa',
};

function SignUp({ data, errors, handleInput, handleSubmit, handleBlur }) {
  const [fileLabel, setFileLabel] = useState('Upload your photo');
  const handleChangeFile = e => {
    handleInput(e);

    const newLabel = e.target.files.length
      ? e.target.files[0].name
      : 'Upload your photo';
    setFileLabel(newLabel);
  };

  return (
    <section className="sign-up" id="sign-up">
      <h2 className="sign-up__heading heading">Working with POST request</h2>
      <form action="#" className="sign-up__form" onSubmit={handleSubmit}>
        <ul className="sign-up__form-field-list">
          <Input
            id="name"
            name="name"
            value={data.name}
            error={errors.name}
            label="Your name"
            classNameInput="sign-up__input input"
            classNameLabel="label"
            placeholder=" "
            onChange={handleInput}
            onBlur={handleBlur}
          />
          <Input
            id="email"
            name="email"
            value={data.email}
            error={errors.email}
            label="Email"
            classNameInput="sign-up__input input"
            classNameLabel="label"
            placeholder=" "
            onChange={handleInput}
            onBlur={handleBlur}
          />
          <Input
            id="phone"
            name="phone"
            value={data.phone}
            error={errors.phone}
            label="Phone"
            classNameInput="sign-up__input input"
            classNameLabel="label"
            placeholder=" "
            helpText="+38 (XXX) XXX - XX - XX"
            onChange={handleInput}
            onBlur={handleBlur}
          />
          <li className="sign-up__form-field sign-up__select-position select-position">
            <fieldset>
              <legend className="select-position__heading">
                Select your position
              </legend>
              <ul className="select-position__radio-btn-list">
                <Input
                  id="frontend"
                  type="radio"
                  name="position"
                  value="frontend"
                  label="Frontend developer"
                  checked={data.position === Position.FRONTEND}
                  onChange={handleInput}
                />
                <Input
                  id="backend"
                  type="radio"
                  name="position"
                  value="backend"
                  label="Backend developer"
                  checked={data.position === Position.BACKEND}
                  onChange={handleInput}
                />
                <Input
                  id="designer"
                  type="radio"
                  name="position"
                  value="designer"
                  label="Designer"
                  checked={data.position === Position.DESIGNER}
                  onChange={handleInput}
                />
                <Input
                  id="qa"
                  type="radio"
                  name="position"
                  value="qa"
                  label="QA"
                  checked={data.position === Position.QA}
                  onChange={handleInput}
                />
              </ul>
            </fieldset>
          </li>
          <Input
            id="photo"
            type="file"
            name="photo"
            label={fileLabel}
            classNameInput="sign-up__input sign-up__input-file input"
            classNameLabel="sign-up__input-file-name"
            accept=".jpg, .jpeg"
            onChange={handleChangeFile}
          />
        </ul>
        <button type="submit" className="sign-up__form-btn btn btn-disable ">
          Sign up
        </button>
      </form>
    </section>
  );
}

export default withFormValidate(SignUp);
