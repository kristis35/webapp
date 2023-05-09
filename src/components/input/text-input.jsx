import React from 'react';
import InputBase from './input-base';

const TextInput = (props) => {
  return (
    <InputBase
      {...props}
      type='text'
    />
  );
};

export default TextInput;
