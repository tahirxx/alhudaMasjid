// Members.js
import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegisterationForm';
import './Members.css'; 

function Members() {
  return (
    <div className='container'>
      <div className='form'>
      <h1 class="signIn">Sign In</h1>
    
      <LoginForm />
       <br></br>
     <RegistrationForm />
      </div>
    </div>
  );
}

export default Members;
