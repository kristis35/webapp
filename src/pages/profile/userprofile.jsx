import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { ContainedButton } from '../../components';
import { useNavigate } from 'react-router-dom';
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
const Background = styled.div`
  background-image: url('https://images4.alphacoders.com/835/83516.jpg');
  background-size: cover;
  width: 2400px;
  height: 1080px;
  background-position: center center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
  padding-top: 10px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin-left: 50px;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: ${(props) => `${props.theme.colors.Black}E5`};
  border: 3px solid ${(props) => props.theme.colors.BlazeBlue};
  padding: 20px;
  border-radius: 40px;
  margin-right: 300px;
`;

function userprofile({ user }) {
    console.log(user);
    const theme = useTheme();
    const navigate = useNavigate();
  return (
    <Background>
  
    <FormContainer>
      <FormElement>
      <Circle>
      <CircleText>
      {user?.level}
      </CircleText>
      </Circle>
          <Userprofile>
            <Userinfo>
              <h1>{user?.name} {user?.surname}</h1>
              <p>Username: {user?.username}</p>
              <p>Email: {user?.email}</p>
              <p>Phone number: {user?.phoneNumber}</p>
              <p>Points: {user?.points}</p>
            </Userinfo>
          </Userprofile>
          <ContainedButton 
            value="Edit Profile"
            color={theme.colors.LightGreen}
            onClick={() => navigate('/profile/edit',{state: user})}
           
          >


          </ContainedButton>
      </FormElement>
    </FormContainer>
    </Background>
  );
}

export default userprofile;