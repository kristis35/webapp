import React, { useState} from 'react';
import './Register.css';




function Register()  {
    const [name, setFirstName] = useState('');
    const [surname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
  
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = [];
      // Check name
      if (!name) {
        validationErrors.push('Name is required');
      }
      // Check email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        validationErrors.push('Please enter a valid email address');
      }
      // Check password
      if (password.length < 6) {
        validationErrors.push('Password must be at least 6 characters long');
      }
      if (password !== confirmPassword) {
        validationErrors.push('Passwords do not match');
      }
      setErrors(validationErrors);
      if (validationErrors.length === 0) {
        // Call the saveData function
        fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              surname: surname,
              username: username,
              email: email,
              phoneNumber: phoneNumber,
              password: password
            })
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
      }
    };
  
    
  
     

    
    return (
      <div className="registration-container">
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={name}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={surname}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>
            
            {errors.length > 0 && (
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
            ))}
            </ul>
            )}
            <button type="submit">Submit</button>
            </form>
      </div>
    );
  }
  
  export default Register;