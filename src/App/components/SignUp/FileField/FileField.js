import React, { useState } from 'react';

function FileField({ handleChangeFileField }) {
  const [fileLabel, setFileLabel] = useState('Upload your photo');
  const handleChange = e => {
    handleChangeFileField(e);

    const newLabel = e.target.files.length
      ? e.target.files[0].name
      : 'Upload your photo';
    setFileLabel(newLabel);
  };

  return (
    <li className="sign-up__form-field">
      <input
        className="sign-up__input sign-up__input-file input"
        type="file"
        name="file"
        onChange={handleChange}
      />
      <label className="sign-up__input-file-name" htmlFor="file">
        {fileLabel}
      </label>
      <p className="sign-up__helper-text"> </p>
    </li>
  );
}

export default FileField;
