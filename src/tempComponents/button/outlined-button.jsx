import React from 'react';
import styled from 'styled-components';
import ButtonBase from './button-base';

const Button = styled(ButtonBase)`
  background: white;
  opacity
  border-color: ${(props) =>
    props.disabled
      ? props.theme.colors.DarkGray
      : props.color
      ? props.color
      : props.theme.colors.Default};
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.DarkGray
      : props.color
      ? props.color
      : props.theme.colors.Default};
`;

const OutlinedButton = (props) => {
  return <Button {...props} />;
};

export default OutlinedButton;
