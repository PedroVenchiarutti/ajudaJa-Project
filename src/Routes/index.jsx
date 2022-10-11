import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Homepages/Homepage';
import UserInformation from '../Pages/UserInformation';


const RouterApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserInformation />} />
      
    </Routes>
  </Router>
);

export default RouterApp;
