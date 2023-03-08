import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Default: '#6A7FC7',
    Black: '#000000',
    BlazeBlue: '#275BE1',
    PurpleBlue: '#6A7FC7',
    SkyBlue: '#23ABE5',
    DarkGray: '#636060',
    LightGray: '#9C9B9D',
    WarmWhite: '#D9D9D9',
    StrongGray: '#343333',
    DarkGreen: '#1D9013',
    BrightGreen: '#3CE04C',
    LightGreen: '#98FF68',
    Red: '#FF0000',
    BrightRed: '#F13838',
    LigthRed: '#D36666'
  },
  fonts: {
    Default: 'Allerta Stencil'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
