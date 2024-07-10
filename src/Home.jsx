import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Navbar from './Navbar';
import GameContainer from './GameContainer';
import Popup from './Popup';
import ComingSoonPopup from './CmSoon';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setIsLoginForm(true); // Default to login form when popup is opened
  };

  const switchToLogin = () => {
    setIsLoginForm(true);
  };

  const switchToSignup = () => {
    setIsLoginForm(false);
  };

  const closePopup = (event) => {
    if (event.target.id === 'popup') {
      setShowPopup(false);
    }
  };

  return (
    <div id="body">
      <Navbar togglePopup={togglePopup} />
      <GameContainer />
      <Popup
        showPopup={showPopup}
        closePopup={closePopup}
        isLoginForm={isLoginForm}
        switchToLogin={switchToLogin}
        switchToSignup={switchToSignup}
      />
      <ComingSoonPopup />
    </div>
  );
};

export default Home;
