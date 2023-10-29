// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import axios from 'axios';
import flyer from './Images/Flyer1.jpg'
import flyer3 from './Images/Flyer3.jpg'
import flyer2 from './Images/flyer2.jpg'

const SalahTime = () => {
  const [salahTimes, setSalahTimes] = useState(null);

  useEffect(() => {
    // Define the latitude and longitude for your location
    const latitude = 39.9608;
    const longitude = -82.8771;

    const currentDate = new Date().toISOString().slice(0, 10); 
    // Fetch Salah times using the Aladhan API
    axios
      .get(`http://api.aladhan.com/v1/timings/${currentDate}?latitude=${latitude}&longitude=${longitude}`)
      .then((response) => {
        setSalahTimes(response.data.data.timings);
      })
      .catch((error) => {
        console.error('Error fetching Salah times:', error);
      });
  }, []);

  
  if (!salahTimes) {
    return <div>Loading Salah times...</div>;
  }

  return (
    <div className="salah-time">
      <h2>Salah Times</h2>
      <DateTimeDisplay />
      <ul>
        <li>Fajr: {salahTimes.Fajr}</li>
        <li>Dhuhr: {salahTimes.Dhuhr}</li>
        <li>Asr: {salahTimes.Asr}</li>
        <li>Maghrib: {salahTimes.Maghrib}</li>
        <li>Isha: {salahTimes.Isha}</li>
      </ul>
    </div>
  );
};

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <h2>Current Date and Time:</h2>
      <p>{formattedDateTime}</p>
    </div>
  );
}

const MissionVision = () => {
  return (
    <div className="mission-vision">
      <h1>Mission & Vision</h1>
      <p>"Our mission is to be a spiritual and community center dedicated to serving the diverse needs of the East African community in the east side of Columbus. We aim to provide a welcoming and inclusive environment that fosters religious growth, education, and cultural preservation. Through our services and programs, we strive to strengthen faith, promote unity, and contribute to the well-being and success of our community."</p>
      <p>"To be a thriving center of faith, unity, and cultural preservation, connecting our community and contributing to a brighter future."</p>
    </div>
  );
};


const Event = () => {
  return (
    
      
    <div className="events">
      
      <div className='card'>
      <img src={ flyer} className='flyer' alt='flyer'/>
      </div>
      <div className='card'>
      <img src={flyer2}  className='flyer' alt='flyer'/>
      </div>
      <div className='card'>
      <img src={flyer3}  className='flyer' alt='logo'/>
      </div>

    </div>
    
  );
};

function Home() {
  return (
    
      <div className="home-container">
        <MissionVision />
        <h1 className='title'>Al-Huda Islamic Center!</h1>
        <SalahTime />
        <Event /> 
    </div>
  );
}

export default Home;
