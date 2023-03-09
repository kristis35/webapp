import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainedButton, IconButton, MenuIcon, OutlinedButton } from '..';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const TopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 52px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.Black};
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.Black} 24%,
    ${(props) => `${props.theme.colors.Black}E5`} 64%,
    ${(props) => `${props.theme.colors.Black}CC`} 100%,
    ${(props) => `${props.theme.colors.Black}CC`} 100%
  );
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(
      to right,
      ${(props) => `${props.theme.colors.Black}4C`} 0%,
      ${(props) => props.theme.colors.BlazeBlue} 50%,
      ${(props) => `${props.theme.colors.Black}4C`} 100%
    )
    2;
`;

const SideBar = styled.div`
  position: fixed;
  top: 52px;
  height: calc(100% - 52px);
  width: 300px;

  background-color: ${(props) => props.theme.colors.Black};
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.Black} 24%,
    ${(props) => `${props.theme.colors.Black}E5`} 64%,
    ${(props) => `${props.theme.colors.Black}CC`} 100%,
    ${(props) => `${props.theme.colors.Black}CC`} 100%
  );
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(
      to right,
      ${(props) => `${props.theme.colors.Black}4C`} 0%,
      ${(props) => props.theme.colors.BlazeBlue} 50%,
      ${(props) => `${props.theme.colors.Black}4C`} 100%
    )
    2;

  transition: all 0.25s ease-out;
  transform: translateX(${(props) => `${props.isOpen ? 0 : -300}px`});
`;

const MenuButtonContainer = styled.div``;

const NavigationButtonsContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 8px;
`;

const NavigationBar = () => {
  const token = localStorage.getItem('token');

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <>
      <TopBar>
        <MenuButtonContainer>
          <IconButton onClick={() => toggleSideBar()}>
            <MenuIcon />
          </IconButton>
        </MenuButtonContainer>
        <NavigationButtonsContainer>
          {!token && location.pathname === '/' && (
            <>
              <ContainedButton
                value='Sign Up'
                color={theme.colors.LightGreen}
                onClick={() => navigate('/register')}
              />
              <ContainedButton
                value='Sign In'
                color={theme.colors.SkyBlue}
                onClick={() => navigate('/login')}
              />
            </>
          )}
          {location.pathname !== '/' && (
            <>
              <OutlinedButton
                value='Home'
                color={theme.colors.PurpleBlue}
                onClick={() => navigate('/')}
              />
            </>
          )}
        </NavigationButtonsContainer>
      </TopBar>
      <SideBar isOpen={sideBarIsOpen} />
    </>
  );
};

export default NavigationBar;
