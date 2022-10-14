import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Homepages/Homepage';
import SingUp from '../Pages/SingUp And Login/SingUp/SingUp';
import UserInformation from '../Pages/UserInformation'
import EditProfile from '../Pages/EditProfile';


const RouterApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/singup' element={<SingUp/>} />
      <Route path='/userInformation' element={<UserInformation/>} />
      <Route path='/EditProfile' element={<EditProfile/>} />
    </Routes>
  </Router>
);

export default RouterApp;
