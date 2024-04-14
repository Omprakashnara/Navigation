// LoginPage.js
import React, { useState } from 'react';
import './Login.css';

function LoginPage({userData,onNavigate}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    // For simplicity, let's assume the username is the email for the signup
    const s1=formData.username?.toString()
    const s2=userData.email?.toString()
    if (s1===s2) {
      console.log('Login successful');
      // Reset error state if login is successful
      setError('');
      onNavigate();
    } else {
      console.log('Invalid username or password');
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Login form fields */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;