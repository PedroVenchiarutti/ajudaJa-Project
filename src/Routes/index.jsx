import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../Pages/Homepages/Homepage';
import UserInformation from '../Pages/UserInformation/userinformation'
import MyProfile from '../Pages/MyProfile/Myprofile';
import MyProfilePublic from '../Pages/MyProfilePublic'
import EditProfile from '../Pages/EditProfile'
import LoginAndSign from '../Pages/LoginAndSignUp';
import PasswordRecuperation from '../Pages/passwordRecuperation';
import { AuthContext, AuthProvider } from '../contexts/auth';





const RouterApp = () => { 

  const Private = ({children}) => { 
    const {authenticated} = useContext(AuthContext);
    console.log(authenticated)
    if(authenticated) { 
      return children
    } else { 
      return <Navigate to='/login'/>
    }
  }

  const PrivateCard = ({ children }) => { 
    const {authenticated} = useContext(AuthContext);

    if(!authenticated) { 
      return <Navigate to="/login"/>
    } else { 
      return children;
    }
  }

  const PrivateLogin = ({children}) => { 
    const {authenticated} = useContext(AuthContext);
    if(authenticated) { 
      return <Navigate to='/myprofile'/>
    } else { 
      return children
    }
  }

  
  
  return(

  
    <Router>
      <AuthProvider>
     
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path='/userInformation' element={
        <UserInformation/>} />
        <Route path='/myprofile' element={
         <Private>
            <MyProfile /> 
         </Private>
      } />
      <Route path='/myprofilepublic' element={
      <MyProfilePublic/> 
    } />

    <Route path='/editprofile' element={
      <Private>
         <EditProfile/> 
      </Private>
   
    } />
        </Route>
    
        
        <Route path='/login' element={
          <PrivateLogin>
            <LoginAndSign/>
            </PrivateLogin>
            } />

        <Route path='/newpassword' element= {
          <PasswordRecuperation/>
        } />

        
      </Routes>
     
      </AuthProvider>
    </Router>
  
)};


export default RouterApp;
