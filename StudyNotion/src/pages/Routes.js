import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import Navbar from '../Components/Navbar'
import Home from './Home';
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from '../Components/PrivateRoute';

const AppRoutes = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-black flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>
        } />
      </Routes>
    </div>
  )
}
export default AppRoutes;