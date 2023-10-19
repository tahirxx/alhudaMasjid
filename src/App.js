


// App.js
import React from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Donate from './Components/Donate';
import Members from './Components/Members';
import LoginForm from './Components/LoginForm'; // Adjust the path as needed
import RegistrationForm from './Components/RegisterationForm';
import Header from './Components/Header';
import NotFound from './Components/NotFound'; // Create a NotFound component


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/donate" component={Donate} />
        <Route path="/members" component={Members} />
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        
       {/* 404 Page - This will match any route that hasn't been matched above */}
       <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
