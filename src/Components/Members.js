// Members.js
import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegisterationForm';

function Members() {
  return (
    <div>
      <h1>Members Area</h1>
      <h2>Login</h2>
      <LoginForm />
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
}

export default Members;
