import React from 'react';
import styled, { css } from 'styled-components';

const TableRow = styled.tr`
  border-bottom: ${(props) =>
    `${props.borderSize || '1px'} solid${props.theme.colors.BlazeBlue}`};
  border-radius: 4px;
  height: 48px;
  ${(props) =>
    props.hovarable &&
    css`
      &:hover {
        box-shadow: 0 2px 16px ${(props) => props.theme.colors.BlazeBlue};
        transform: translateY(-1px);
      }
    `}
`;

const DataTableRow = (props) => {
  const { borderSize, hovarable = true } = props;
  return (
    <TableRow
      borderSize={borderSize}
      hovarable={hovarable}
    >
      {props.children}
    </TableRow>
  );
};

export default DataTableRow;
