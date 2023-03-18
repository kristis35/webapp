import React from 'react';
import styled from 'styled-components';
import ButtonBase from './button-base';

const Button = styled(ButtonBase)`
  background: ${(props) =>
    props.disabled
      ? props.theme.colors.DarkGray
      : props.color
      ? props.color
      : props.theme.colors.Default};
  border: none;
`;

const ContainedButton = (props) => {
  return <Button {...props} />;
};

export default ContainedButton;
