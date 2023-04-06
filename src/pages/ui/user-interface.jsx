import React, { useState } from 'react';
import {
  ContainedButton,
  Input,
  Logo,
  OutlinedButton,
  Popup
} from '../../components';
import { useTheme } from 'styled-components';

const clickMe = (text) => {
  alert(text);
};

const UserInteface = () => {
  const theme = useTheme();

  const [basePopupOpen, setBasePopupOpen] = useState(false);
  const toggleBasePopup = () => {
    setBasePopupOpen(!basePopupOpen);
  };

  const [isLoading, setIsLoading] = useState(false);
  const toggleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <div>
        <ContainedButton
          value='Contained'
          color={theme.colors.PurpleBlue}
          onClick={() => clickMe('Contained button clicked')}
          loading={isLoading}
        />
        <ContainedButton
          value='Contained Disabled'
          color={theme.colors.PurpleBlue}
          disabled
        />
        <OutlinedButton
          value='Outlined'
          color={theme.colors.PurpleBlue}
          onClick={() => clickMe('Outlined button clicked')}
          loading={isLoading}
        />
        <OutlinedButton
          value='Outlined Disabled'
          color={theme.colors.PurpleBlue}
          disabled
        />
        <OutlinedButton
          value='Set Loading'
          color={theme.colors.PurpleBlue}
          onClick={toggleIsLoading}
        />
      </div>
      <div>
        <Input
          label='Small Input'
          labelColor={theme.colors.Black}
          type='text'
          size='sm'
          placeholder='Placeholder'
          errorMessage='This is an error'
        />
        <Input
          label='Medium Input'
          labelColor={theme.colors.Black}
          type='text'
          size='md'
          placeholder='Placeholder'
          required
        />
        <Input
          label='Large Input'
          labelColor={theme.colors.Black}
          type='text'
          size='lg'
          placeholder='Placeholder'
          errorMessage='This is an error'
        />
      </div>
      <div>
        <OutlinedButton
          value='Base Popup'
          color={theme.colors.PurpleBlue}
          onClick={toggleBasePopup}
        />
      </div>
      <div>
        <Logo
          height='392px'
          width='582px'
        />
      </div>
      {basePopupOpen && (
        <Popup
          title='Title'
          message='This is a message!'
          closeButtonColor={theme.colors.StrongGray}
          onClose={toggleBasePopup}
          buttons={[
            {
              name: 'Button 1',
              color: theme.colors.LightGray
            },
            {
              name: 'Button 2',
              color: theme.colors.LightGray
            }
          ]}
        />
      )}
    </div>
  );
};

export default UserInteface;
