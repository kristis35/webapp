import React from 'react';
import styled from 'styled-components';
import ButtonBase from './ButtonBase';

const Button = styled(ButtonBase)`
  background: white;
  border-color: ${(props) =>
    props.color ? props.color : props.theme.colors.Default};
  color: ${(props) => (props.color ? props.color : props.theme.colors.Default)};
`;

const OutlinedButton = (props) => {
  const { value, font, color, onClick, loading } = props;
  return (
    <Button
      value={value}
      font={font}
      color={color}
      onClick={onClick}
      loading={loading}
    />
  );
};

export default OutlinedButton;
