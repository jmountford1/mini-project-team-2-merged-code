import React, { useState } from 'react';

const Login = () => {
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

return (
  <div>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  </div>
);
};

export default Login;

