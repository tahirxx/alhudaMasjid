import React, { useState } from 'react';
import axios from 'axios'; // You need to import axios
import './Registeration.css';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formVisible, setFormVisible] = useState(false); // sets it to Initially hidden

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement registration logic, e.g., make an API request to your server
    try {
      const response = await axios.post('/api/register', formData); // Make sure to use the correct API endpoint
      // Assuming your API responds with a success message
      if (response.data.success) {
        alert('Registration successful!'); // You can replace this with any user feedback mechanism you prefer.
      } else {
        alert('Registration failed. Please try again.'); // Handle registration errors.
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred during registration.'); // Handle network or server errors.
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible); // Toggle form visibility
  };

  return (
    <div>
    <button onClick={toggleFormVisibility}>(Click to Sign Up)</button>
    {formVisible && ( // Render the form only if formVisible is true
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
      <button className='register-btn' type="submit">Register</button>
    </form>
  )}
  </div>
  );
}

export default RegistrationForm;
