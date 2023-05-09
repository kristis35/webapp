import React from 'react';
import InputBase from './input-base';

const PasswordInput = (props) => {
  return (
    <InputBase
      {...props}
      type='password'
    />
  );
};

export default PasswordInput;
