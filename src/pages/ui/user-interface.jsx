import React from 'react';
import { ContainedButton, Input, Logo, OutlinedButton } from '../../components';
import { useTheme } from 'styled-components';

const clickMe = (text) => {
  alert(text);
};

const UserInteface = () => {
  const theme = useTheme();
  return (
    <div>
      <div>
        <ContainedButton
          value='Contained'
          color={theme.colors.PurpleBlue}
          onClick={() => clickMe('Contained button clicked')}
        />
        <ContainedButton
          value='Contained'
          color={theme.colors.PurpleBlue}
          loading
        />
        <ContainedButton
          value='Contained'
          color={theme.colors.PurpleBlue}
          disabled
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
        <OutlinedButton
          value='Outlined'
          color={theme.colors.PurpleBlue}
          disabled
        />
      </div>
      <div>
        <Input
          label='Small Input'
          type='text'
          size='sm'
          placeholder='Placeholder'
          errorMessage='This is an error'
        />
        <Input
          label='Medium Input'
          type='text'
          size='md'
          placeholder='Placeholder'
          required
        />
        <Input
          label='Large Input'
          type='text'
          size='lg'
          placeholder='Placeholder'
          errorMessage='This is an error'
        />
      </div>
      <div>
        <Logo
          height='392px'
          width='582px'
        />
      </div>
    </div>
  );
};

export default UserInteface;
