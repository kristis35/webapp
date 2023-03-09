import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { ContainedButton } from '../../components';
import { useSave } from '../../utils';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  // font-family: Arial, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: ${(props) => `${props.theme.colors.White}7F`};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #0077cc;
  }
`;

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const { status, headers, loading, error, save } = useSave(
    'http://localhost:8080/login'
  );

  useEffect(() => {
    if (status?.code === 200 && headers?.authorization) {
      localStorage.setItem('token', headers.authorization);
      navigate('/home');
    }
  }, [status, headers]);

  useEffect(() => {
    if (
      error?.response &&
      error?.response.data &&
      error?.response.data.message
    ) {
      console.error(`Error: ${error.response.data.message}`);
      // handle the error message here
    } else if (error) {
      console.error(error);
    }
  }, [error]);

  const handleUsernameChange = (e) => {
    setCredentials({
      ...credentials,
      username: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save(null, {
      headers: {
        Authorization:
          'Basic ' + btoa(credentials.username + ':' + credentials.password)
      }
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <InputContainer>
          <Label htmlFor='username'>Username</Label>
          <Input
            type='text'
            id='username'
            value={credentials.username}
            onChange={handleUsernameChange}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            value={credentials.password}
            onChange={handlePasswordChange}
          />
        </InputContainer>
        <ContainedButton
          value='Submit'
          color={theme.colors.PurpleBlue}
          loading={loading}
          type='submit'
        />
      </Form>
    </FormContainer>
  );
};

export default Login;
