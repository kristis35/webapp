import React from 'react';
import { useTheme } from 'styled-components';

const IconBase = (props) => {
  const { height, width, color, children } = props;
  const theme = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height || '36px'}
      width={width || '36px'}
      viewBox='0 0 24 24'
      fill={color || theme.colors.WarmWhite}
    >
      {children}
    </svg>
  );
};

export default IconBase;
