import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { ContainedButton, Form } from '../../components';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '../../assets/backgrounds/profile-page.png';

const Container = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-image: url(${profilePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: auto;
`;

const Userprofile = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
`;

const Userinfo = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  font-color: white;
  margin-left: 1px;
`;

const Circle = styled.div`
  height: 50px;
  width: 200px;
  float: left;
  display: flex;
  border-radius: 40px;
  background: ${(props) => `${props.theme.colors.Default}E5`};
  border: 3px solid ${(props) => props.theme.colors.BlazeBlue};
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
`;

const CircleText = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  padding-top: 10px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.Black};
  margin-left: 50px;
`;

function userprofile({ user }) {
  const topBar = document.getElementById('topBar');
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container topBar={topBar}>
      <Form
        showSubmitButton={false}
        showCancelButton={false}
      >
        <Circle>
          <CircleText>{user?.level}</CircleText>
        </Circle>
        <Userprofile>
          <Userinfo>
            <h1>
              {user?.name} {user?.surname}
            </h1>
            <p>Username: {user?.username}</p>
            <p>Email: {user?.email}</p>
            <p>Phone number: {user?.phoneNumber}</p>
            <p>Points: {user?.points}</p>
          </Userinfo>
        </Userprofile>
        <ContainedButton
          value='Edit Profile'
          color={theme.colors.PurpleBlue}
          onClick={() => navigate('/profile/edit', { state: user })}
        ></ContainedButton>
      </Form>
    </Container>
  );
}

export default userprofile;
