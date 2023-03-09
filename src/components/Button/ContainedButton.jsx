import React from 'react';
import styled from 'styled-components';
import ButtonBase from './ButtonBase';

const Button = styled(ButtonBase)`
  background: ${(props) =>
    props.color ? props.color : props.theme.colors.Default};
  border: none;
`;

const ContainedButton = (props) => {
  const { value, font, color, onClick, loading, ...rest } = props;
  return (
    <Button
      {...rest}
      value={value}
      font={font}
      color={color}
      onClick={onClick}
      loading={loading}
    />
  );
};

export default ContainedButton;
