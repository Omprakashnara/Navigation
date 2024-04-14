import React, { useState } from 'react';
import './SignUpPage.css';



function SignUp({ formData, setFormData, onNavigate }) {
  
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));


    setError("error occured in signup page"); // Set error message based on validation result
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your signup logic
    if (formData.password !== formData.confirmPassword) {
      setError('Password and confirm password do not match');
    } else {
      setError('');
      console.log('Form submitted');
      // Navigate to the login page
      onNavigate();
    }
  };

  return (
    <div>
      <h2 >Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="button1" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;