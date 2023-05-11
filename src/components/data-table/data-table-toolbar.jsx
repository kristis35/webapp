import React from 'react';
import styled from 'styled-components';

const Toolbar = styled.div`
  display: flex;
  justify-content: ${(props) => props.align || 'space-between'};
  width: 100%;
`;

const DataTableToolbar = (props) => {
  const { align } = props;
  return <Toolbar align={align}>{props.children}</Toolbar>;
};

export default DataTableToolbar;
