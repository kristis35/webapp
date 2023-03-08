import React from 'react';
import { useTheme } from 'styled-components';

const MenuIcon = (props) => {
  const { height, width, color } = props;
  const theme = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height || '36px'}
      width={width || '36px'}
      viewBox='0 0 24 24'
      fill={color || theme.colors.WarmWhite}
    >
      <path
        d='M0 0h24v24H0V0z'
        fill='none'
      />
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
    </svg>
  );
};

export default MenuIcon;
