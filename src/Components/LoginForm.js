// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic, e.g., make an API request to your server
  };

  return (
       
    <form onSubmit={handleSubmit}>
      <div>
      <input className='input'
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      </div>

      <div>
      <input className='input'
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      </div>
      <button className='login-btn' type="submit">Login</button>
    </form>
   
  );
}

export default LoginForm;
