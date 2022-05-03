import React, { useState } from 'react';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../helpers/validateRegEx';
import { getResolutionFileImg } from '../../helpers/utilities';
import { initialValues, validateFields } from './initialValues';
import abzTestApi from '../../services/api/api';

function withFormValidate(WrappedComponent) {
  return function Wrapper(props) {
    const [data, setData] = useState(initialValues);
    const [errors, setErrors] = useState(validateFields);

    const handleInput = e => {
      const { name, value } = e.currentTarget;

      setData({ ...data, [name]: value });
      setErrors({ ...errors, [name]: '' });

      if (name === 'photo') {
        setData({ ...data, [name]: e.target.files[0] });
      }
    };
    const handleSubmit = async e => {
      e.preventDefault();

      const isValidate = Object.keys(errors).reduce(
        (sum, item) => sum && validateForm(item, data[item]),
        true,
      );
      if (isValidate) {
        const status = await abzTestApi.postUser(data);
        return status;
      }
      return null;
    };
    const handleBlur = e => {
      const { value, name } = e.currentTarget;
      validateForm(name, value);
    };
    const validateForm = async (name, value) => {
      // validate photo
      if (name === 'photo') {
        // photo field empty
        if (!value) {
          setErrors({
            ...errors,
            [name]: 'field must not be empty',
          });
          return false;
        }
        // photo type
        if (!'image/jpeg' === value.type || !'image/jpg' === value.type) {
          setErrors({
            ...errors,
            [name]: 'photo should be jpg/jpeg image formats',
          });
          return false;
        }
        // photo size
        const fiveMB = 5 * 1024 * 1024;
        if (!fiveMB >= value.size) {
          setErrors({
            ...errors,
            [name]: 'photo size must not exceed 5MB',
          });
          return false;
        }
        // photo resolution
        const resolution = await getResolutionFileImg(value);
        const minResolution = 70;
        if (
          resolution.width < minResolution ||
          resolution.height < minResolution
        ) {
          setErrors({
            ...errors,
            [name]: 'photo resolution at least 70x70px',
          });
          return false;
        }
        return true;
      }

      // validate name, email, phone fields
      const isEmpty = isNotEmptyValue(name, value);
      switch (true) {
        case name === 'name' && isEmpty:
          if (!validateName(value)) {
            setErrors({
              ...errors,
              [name]: 'user name, should be 2-60 characters',
            });
            return false;
          }
          return true;
        case name === 'email' && isEmpty:
          if (!validateEmail(value)) {
            setErrors({ ...errors, [name]: 'enter a valid email' });
            return false;
          }
          return true;
        case name === 'phone' && isEmpty:
          if (!validatePhone(value)) {
            setErrors({
              ...errors,
              [name]:
                'number, should start with code of Ukraine +380 and should be 12 numbers',
            });
            return false;
          }
          return true;
        default:
          return isEmpty;
      }
    };
    const isNotEmptyValue = (name, value) => {
      if (!value.trim()) {
        setErrors({ ...errors, [name]: 'field must not be empty' });
        return false;
      }
      return true;
    };
    return (
      <WrappedComponent
        {...props}
        data={data}
        errors={errors}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        handleInput={handleInput}
      />
    );
  };
}

export default withFormValidate;
