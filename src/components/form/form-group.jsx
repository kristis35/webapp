import React from 'react';
import styled from 'styled-components';

const FormGroupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  width: ${(props) => props.width || '480px'};
`;

const FormGroup = (props) => {
  return (
    <FormGroupContainer
      width={props.width}
      justifyContent={props.justifyContent}
    >
      {props.children}
    </FormGroupContainer>
  );
};

export default FormGroup;
