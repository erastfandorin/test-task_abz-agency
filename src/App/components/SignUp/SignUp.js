import React, { useState, useEffect } from 'react';
import Input from './Input/Input';

import withFormValidate from '../HOC/withFormValidate';
import { initialValues } from '../HOC/initialValues';
import abzTestApi from '../../services/api/api';

function SignUp({
  setIsFormSended,
  data,
  errors,
  handleInput,
  handleSubmit,
  handleBlur,
}) {
  const [fileLabel, setFileLabel] = useState('Upload your photo');
  const [positions, setPositions] = useState([]);
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await abzTestApi.getPositions();
      setPositions([...result.positions]);
      // active first radio btn
      const firstRadioBtn = result.positions[0].id;
      initialValues.position = firstRadioBtn;
    })();
  }, []);

  useEffect(() => {
    checkFormFilling();
  }, [data, errors]);

  const handleChangeFile = e => {
    handleInput(e);

    const newLabel = e.target.files.length
      ? e.target.files[0].name
      : 'Upload your photo';
    setFileLabel(newLabel);
  };

  const handleSubmitForm = async e => {
    const status = await handleSubmit(e);
    setIsFormSended(status);
  };

  const checkFormFilling = () => {
    const dataValues = Object.values(data);
    const errorsValues = Object.values(errors);
    const formField = dataValues.findIndex(value => value === '');

    const formValid = errorsValues.findIndex(error => !(error === ''));

    if (formField === -1 && formValid === -1) {
      setIsFormFilled(true);
      return null;
    }
    setIsFormFilled(false);
    return null;
  };

  return (
    <section className="sign-up" id="sign-up">
      <h2 className="sign-up__heading heading">Working with POST request</h2>
      <form action="#" className="sign-up__form" onSubmit={handleSubmitForm}>
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
                {positions.map(position => {
                  const correctIdName = `p_${position.name.replace(
                    /\s/g,
                    '_',
                  )}`;
                  return (
                    <Input
                      key={position.id}
                      id={correctIdName}
                      type="radio"
                      name="position"
                      value={position.id}
                      label={position.name}
                      checked={Number(data.position) === position.id}
                      onChange={handleInput}
                    />
                  );
                })}
              </ul>
            </fieldset>
          </li>
          <Input
            id="photo"
            type="file"
            name="photo"
            error={errors.photo}
            label={fileLabel}
            classNameInput="sign-up__input sign-up__input-file input"
            classNameLabel="sign-up__input-file-name"
            accept=".jpg, .jpeg"
            onChange={handleChangeFile}
          />
        </ul>
        <button
          type="submit"
          className={
            isFormFilled
              ? 'sign-up__form-btn btn'
              : 'sign-up__form-btn btn btn-disable'
          }
        >
          Sign up
        </button>
      </form>
    </section>
  );
}

export default withFormValidate(SignUp);
