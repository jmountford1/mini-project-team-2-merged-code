import React, { useState } from 'react';

const c = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState(null);

const handleLogin = async (event) => {
  event.preventDefault();

  const credentials = { email, password };

  try {
    const response = await fetch('/api/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful', data);
      setErrorMessage(null);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error during login', error);
    setErrorMessage('Incorrect Username or Password.');
  }
};

};

export default Login;

