import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from '../../components';
import { useSave } from '../../utils';
import { DataContext } from '../../utils';

const Login = () => {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();
  const [hasErrors, setHasErrors] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [credentials, setCredentials] = useState({
    username: {
      value: '',
      errorMessage: ''
    },
    password: {
      value: '',
      errorMessage: ''
    }
  });

  const { response, loading, error, save } = useSave(
    `${dataContext.API}/login`
  );

  useEffect(() => {
    if (response?.status === 200 && response?.headers?.authorization) {
      localStorage.setItem('token', response.headers.authorization);
      navigate('/');
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      setFormErrorMessage('Username or password is incorrect');
    }
  }, [error]);

  const handleChange = (e) => {
    setFormErrorMessage('');
    setCredentials({
      ...credentials,
      [e.target.name]: {
        value: e.target.value,
        errorMessage: ''
      }
    });
  };

  const checkForErrors = () => {
    setHasErrors(false);

    if (credentials.username?.value === '') {
      setHasErrors(true);
      setCredentials({
        ...credentials,
        username: {
          ...credentials.username,
          errorMessage: 'Required'
        }
      });
    }

    if (credentials.password?.value === '') {
      setHasErrors(true);
      setCredentials({
        ...credentials,
        password: {
          ...credentials.password,
          errorMessage: 'Required'
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkForErrors();

    if (!hasErrors) {
      save(null, {
        headers: {
          Authorization:
            'Basic ' +
            btoa(
              credentials.username?.value + ':' + credentials.password?.value
            )
        }
      });
    }
  };

  return (
    <Form
      title='Login'
      onSubmit={handleSubmit}
      loading={loading}
      errorMessage={formErrorMessage}
    >
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
        type='password'
        label='Password'
        name='password'
        value={credentials.password?.value}
        onChange={handleChange}
        placeholder='Password'
        required
        errorMessage={credentials.password?.errorMessage}
      />
    </Form>
  );
};

export default Login;
