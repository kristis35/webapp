import React from 'react';
import { ContainedButton, OutlinedButton } from '../../components';
import { useTheme } from 'styled-components';

const clickMe = (text) => {
  alert(text);
};

const UserInteface = () => {
  const theme = useTheme();
  return (
    <>
      <ContainedButton
        value='Contained'
        color={theme.colors.PurpleBlue}
        onClick={() => clickMe('Contained button clicked')}
      />
      <ContainedButton
        value='Contained'
        color={theme.colors.PurpleBlue}
        loading={true}
      />
      <OutlinedButton
        value='Outlined'
        color={theme.colors.PurpleBlue}
        onClick={() => clickMe('Outlined button clicked')}
      />
      <OutlinedButton
        value='Outlined'
        color={theme.colors.PurpleBlue}
        loading
      />
    </>
  );
};

export default UserInteface;
