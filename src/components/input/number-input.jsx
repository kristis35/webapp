import React from 'react';
import styled from 'styled-components';
import InputBase from './input-base';

const NumberField = styled(InputBase)`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const NumberInput = (props) => {
  return (
    <NumberField
      {...props}
      type='number'
    />
  );
};

export default NumberInput;
