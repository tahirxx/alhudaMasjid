// Members.js
import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegisterationForm';
import './Members.css'; 

function Members() {
  return (
    <div className='container'>
      <div className='form'>
      <h1>Registeration Form</h1>
      <h2>Login</h2>
      <LoginForm />
      <h2>Register</h2>
      <RegistrationForm />
      </div>
    </div>
  );
}

export default Members;
