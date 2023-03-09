import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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

const DangerMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 15px;
`;

const Registration = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState([]);
  const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(false);

  const { response, loading, error, save } = useSave(
    'http://localhost:8080/user/register'
  );

  if (response) {
    console.log(response);
    setData(response);
  }

  if (error) {
    if (error.response && error.response.data && error.response.data.message) {
      console.error(`Error: ${error.response.data.message}`);
      // handle the error message here
    } else {
      console.error(error);
    }
  }

  const theme = useTheme();
  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = [];
    // Check name
    if (!registrationDetails?.name) {
      validationErrors.push('Name is required');
    }
    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registrationDetails?.email)) {
      validationErrors.push('Please enter a valid email address');
    }
    // Check password
    if (registrationDetails?.password?.length < 6) {
      validationErrors.push('Password must be at least 6 characters long');
    }
    if (
      registrationDetails?.password !== registrationDetails?.confirmPassword
    ) {
      validationErrors.push('Passwords do not match');
    }
    setErrors(validationErrors);
    if (validationErrors?.length === 0) {
      const { confirmPassword, ...request } = registrationDetails;
      console.log(confirmPassword);
      save(request);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Registration Form</Title>
        <InputContainer>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            type='text'
            id='firstName'
            value={registrationDetails?.name}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                name: e.target.value
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            type='text'
            id='lastName'
            value={registrationDetails?.surname}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                surname: e.target.value
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='username'>Username</Label>
          <Input
            type='text'
            id='username'
            value={registrationDetails?.username}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                username: e.target.value
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            value={registrationDetails?.email}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                email: e.target.value
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='phoneNumber'>Phone Number</Label>
          <Input
            type='tel'
            id='phoneNumber'
            value={registrationDetails?.phoneNumber}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                phoneNumber: e.target.value
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            value={registrationDetails?.password}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                password: e.target.value
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='confirmPassword'>Confirm Password</Label>
          <Input
            type='password'
            id='confirmPassword'
            value={registrationDetails?.confirmPassword}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                confirmPassword: e.target.value
              })
            }
          />
        </InputContainer>
        {data && (
          <DangerMessageContainer className='form-control danger-message'>
            <p>{data.message}</p>
          </DangerMessageContainer>
        )}

        {errors?.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

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

export default Registration;
