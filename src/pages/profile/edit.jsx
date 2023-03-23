import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from '../../components';
import { useUpdate, DataContext } from '../../utils';
import { useLocation } from 'react-router-dom';


const Editprofile = () => {
    const token = localStorage.getItem('token');
    const location = useLocation();
    const user = location.state;
    console.log(user);
    const dataContext = useContext(DataContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
    name: {
        value: user.name,
        errorMessage: ''
    },
    surname: {
        value: user.surname,
        errorMessage: ''
    },
    email: {
        value: user.email,
        errorMessage: ''
    },
    phoneNumber: {
        value: user.phoneNumber,
        errorMessage: ''
    },
    });
    console.log(credentials);
    const { response, loading, error, update } = useUpdate(
    `${dataContext.API}/user/edit/${user.username}`
    );

    useEffect(() => {
    if (response?.status === 200) {
        navigate('/profile');
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
          email: credentials.email.value,
          phoneNumber: credentials.phoneNumber.value,
        };
        update(request,{headers: {
          Authorization:
            token
            
        }});
      }
    };
  
    return (
      <Form
        title='Edit profile'
        onSubmit={handleSubmit}
        loading={loading}
      >
        <Input
          type='text'
          label='Name'
          name='name'
          value={credentials.name?.value}
          onChange={handleChange}
          required
          errorMessage={credentials.name?.errorMessage}
        />
        <Input
          type='text'
          label='Surname'
          name='surname'
          value={credentials.surname?.value}
          onChange={handleChange}
          required
          errorMessage={credentials.surname?.errorMessage}
        />
        <Input
          type='text'
          label='Email'
          name='email'
          value={credentials.email?.value}
          onChange={handleChange}
          required
          errorMessage={credentials.email?.errorMessage}
        />
        <Input
          type='text'
          label='Phone Number'
          name='phoneNumber'
          value={credentials.phoneNumber?.value}
          onChange={handleChange}
          errorMessage={credentials.phoneNumber?.errorMessage}
        />
      </Form>
    );
  };
  
  export default Editprofile;

    