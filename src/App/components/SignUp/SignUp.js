import React from 'react';

function SignUp() {
  return (
    <section className="sign-up">
      <h2 className="sign-up__heading heading">Working with POST request</h2>
      <form action="#" className="sign-up__form">
        <ul className="sign-up__form-field-list">
          <li className="sign-up__form-field">
            <input
              className="sign-up__input input"
              type="text"
              name="name"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label" htmlFor="name">
              Your name
            </label>
            <p className="sign-up__helper-text">Helper text</p>
          </li>
          <li className="sign-up__form-field">
            <input
              className="sign-up__input input"
              type="email"
              name="email"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label" htmlFor="email">
              Email
            </label>
            <p className="sign-up__helper-text">Helper text</p>
          </li>
          <li className="sign-up__form-field">
            <input
              className="sign-up__input input"
              type="text"
              name="phone"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <p className="sign-up__helper-text sign-up__helper-text--active">
              +38 (XXX) XXX - XX - XX
            </p>
          </li>
          <li className="sign-up__form-field sign-up__select-position select-position">
            <fieldset>
              <legend className="select-position__heading">
                Select your position
              </legend>
              <ul className="select-position__radio-btn-list">
                <li>
                  <input
                    type="radio"
                    name="frontend"
                    value="frontend"
                    checked
                  />
                  <label htmlFor="frontend">Frontend developer</label>
                </li>
                <li>
                  <input type="radio" name="backend" value="backend" />
                  <label htmlFor="backend">Backend developer</label>
                </li>
                <li>
                  <input type="radio" name="designer" value="designer" />
                  <label htmlFor="designer">Designer</label>
                </li>
                <li>
                  <input type="radio" name="qa" value="qa" />
                  <label htmlFor="qa">QA</label>
                </li>
              </ul>
            </fieldset>
          </li>
          <li className="sign-up__form-field">
            <input
              className="sign-up__input sign-up__input-file input"
              type="file"
              name="file"
            />
            <label className="sign-up__input-file-name" htmlFor="file">Upload your photo</label>
          </li>
        </ul>
        <button type="submit" className='sign-up__form-btn btn btn-disable '>Sign up</button>
      </form>
    </section>
  );
}

export default SignUp;
