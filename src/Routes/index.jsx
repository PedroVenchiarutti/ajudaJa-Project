import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Homepages/Homepage';
import Chatbox from '../Pages/ChatBox';

const RouterApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
  </Router>
);

export default RouterApp;
