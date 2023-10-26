// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Donate from './Components/Donate';
import Members from './Components/Members';
import LoginForm from './Components/LoginForm'; // Adjust the path as needed
import RegistrationForm from './Components/RegisterationForm';
import Header from './Components/Header';
import NotFound from './Components/NotFound'; // Create a NotFound component
import GradientBackground from './Components/GradientBackground'; // Import the GradientBackground component
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
       <GradientBackground> {/* Wrap your content with GradientBackground */}
       
      <Header />
      <div style={{ marginTop: '60px' }}> {/* Add margin to create spacing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/members" element={<Members />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        
        {/* 404 Page - This will match any route that hasn't been matched above */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      
      </GradientBackground>
    </div>
    </Router>
  );
}


export default App;
