import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  width: ${(props) => props.width || '36px'};
  height: ${(props) => props.width || '36px'};
  margin: 4px;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconButton = (props) => {
  const { children, onClick, className, ...buttonProps } = props;
  return (
    <Button
      {...buttonProps}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default IconButton;
