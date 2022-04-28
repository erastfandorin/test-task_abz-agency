import React from 'react';

function Input({
  id = name,
  type = 'text',
  name,
  value,
  error,
  label,
  required = false,
  helpText = '',
  classNameInput = '',
  classNameLabel = '',
  ...props
}) {
  let errorStyles = '';
  if (error) {
    errorStyles = 'input-error';
  }

  return (
    <li className={errorStyles}>
      <input
        id={id}
        className={classNameInput}
        type={type}
        name={name}
        value={value}
        required={required}
        {...props}
      />
      <label className={classNameLabel} htmlFor={id}>
        {label}
      </label>

      {/* render error or helpText or nothing */}
      {error ? (
        <p className="input__helper-text">{error}</p>
      ) : (
        helpText && <p className="input__helper-text">{helpText}</p>
      )}
    </li>
  );
}

export default Input;
