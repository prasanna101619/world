import React from 'react';
import './App.css'; // Import your CSS file
import Home from './Home'; 
import InvitePage from './InvitePage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/invite" element= {<InvitePage/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
