import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import credentialsPhoto from '../../assets/backgrounds/credentials-page.png';
import { Form, Input } from '../../components';
import { useSave, DataContext } from '../../utils';

const Container = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-image: url(${credentialsPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: auto;
`;

const Registration = (props) => {
  const topBar = document.getElementById('topBar');
  const dataContext = useContext(DataContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: {
      value: '',
      errorMessage: ''
    },
    surname: {
      value: '',
      errorMessage: ''
    },
    username: {
      value: '',
      errorMessage: ''
    },
    email: {
      value: '',
      errorMessage: ''
    },
    phoneNumber: {
      value: '',
      errorMessage: ''
    },
    password: {
      value: '',
      errorMessage: ''
    },
    confirmPassword: {
      value: '',
      errorMessage: ''
    }
  });

  const { response, loading, error, save, clearError } = useSave(
    `${dataContext.API}/user/register`
  );

  useEffect(() => {
    if (response?.status === 201) {
      props.setSnackbar({
        color: theme.colors.DarkGreen,
        message: 'Registration successful!'
      });
      props.snackbarRef.current.show();

      navigate('/login');
    }
  }, [response]);

  useEffect(() => {
    if (error?.response?.data?.errors?.length > 0) {
      mapErrors(error.response.data.errors);
    }
  }, [error]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: {
        value: e.target.value,
        errorMessage: ''
      }
    });

    if (error) {
      clearError();
    }
  };

  const checkForErrors = () => {
    let hasErrors = false;
    const validationErrors = [];

    // Check name
    if (credentials.name?.value === '') {
      validationErrors.push({
        propertyName: 'name',
        errorMessage: 'Required'
      });
    }

    // Check surname
    if (credentials.surname?.value === '') {
      validationErrors.push({
        propertyName: 'surname',
        errorMessage: 'Required'
      });
    }

    // Check username
    if (credentials.username?.value === '') {
      validationErrors.push({
        propertyName: 'username',
        errorMessage: 'Required'
      });
    }

    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (credentials.email?.value === '') {
      validationErrors.push({
        propertyName: 'email',
        errorMessage: 'Required'
      });
    } else if (!emailRegex.test(credentials.email.value)) {
      validationErrors.push({
        propertyName: 'email',
        errorMessage: 'Please enter a valid email address'
      });
    }

    // Check password
    if (credentials.password?.value === '') {
      validationErrors.push({
        propertyName: 'password',
        errorMessage: 'Required'
      });
    } else if (credentials.password.value.length < 6) {
      validationErrors.push({
        propertyName: 'password',
        errorMessage: 'Password must be at least 6 characters long'
      });
    }

    // Check comfirm password
    if (credentials.confirmPassword?.value === '') {
      validationErrors.push({
        propertyName: 'confirmPassword',
        errorMessage: 'Required'
      });
    } else if (
      credentials.password?.value !== '' &&
      credentials.password.value !== credentials.confirmPassword.value
    ) {
      validationErrors.push({
        propertyName: 'confirmPassword',
        errorMessage: 'Passwords do not match'
      });
    }

    if (validationErrors.length > 0) {
      hasErrors = true;
      mapErrors(validationErrors);
    }

    if (error?.response?.data?.errors?.length > 0) {
      hasErrors = true;
    }

    return hasErrors;
  };

  const mapErrors = (array) => {
    let updatedCredentials = { ...credentials };

    array.forEach((x) => {
      updatedCredentials = {
        ...updatedCredentials,
        [x.propertyName]: {
          ...updatedCredentials[x.propertyName],
          errorMessage: x.errorMessage
        }
      };
    });

    setCredentials(updatedCredentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = checkForErrors();

    if (!hasErrors) {
      const request = {
        name: credentials.name.value,
        surname: credentials.surname.value,
        username: credentials.username.value,
        email: credentials.email.value,
        phoneNumber: credentials.phoneNumber.value,
        password: credentials.password.value
      };
      save(request);
    }
  };

  return (
    <Container topBar={topBar}>
      <Form
        title='Register'
        onSubmit={handleSubmit}
        loading={loading}
      >
        <Input
          type='text'
          label='Name'
          name='name'
          value={credentials.name?.value}
          onChange={handleChange}
          placeholder='Name'
          required
          errorMessage={credentials.name?.errorMessage}
        />
        <Input
          type='text'
          label='Surname'
          name='surname'
          value={credentials.surname?.value}
          onChange={handleChange}
          placeholder='Surname'
          required
          errorMessage={credentials.surname?.errorMessage}
        />
        <Input
          type='text'
          label='Username'
          name='username'
          value={credentials.username?.value}
          onChange={handleChange}
          placeholder='Username'
          required
          errorMessage={credentials.username?.errorMessage}
        />
        <Input
          type='text'
          label='Email'
          name='email'
          value={credentials.email?.value}
          onChange={handleChange}
          placeholder='Email'
          required
          errorMessage={credentials.email?.errorMessage}
        />
        <Input
          type='text'
          label='Phone Number'
          name='phoneNumber'
          value={credentials.phoneNumber?.value}
          onChange={handleChange}
          placeholder='Phone Number'
          errorMessage={credentials.phoneNumber?.errorMessage}
        />
        <Input
          type='password'
          label='Password'
          name='password'
          value={credentials.password?.value}
          onChange={handleChange}
          placeholder='Password'
          required
          errorMessage={credentials.password?.errorMessage}
        />
        <Input
          type='password'
          label='Confirm Password'
          name='confirmPassword'
          value={credentials.confirmPassword?.value}
          onChange={handleChange}
          placeholder='Confirm Password'
          required
          errorMessage={credentials.confirmPassword?.errorMessage}
        />
      </Form>
    </Container>
  );
};

export default Registration;
