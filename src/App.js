import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import { Route, Router, Routes } from 'react-router-dom';
import WhyAcme from './Components/WhyAcme';
import Login from './Components/Login';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';


const App = () => {
 

  return (
    <div className="tbg ">
      <Navbar/>
      <div className=' '>
      <div>
      
        {/* <LandingPage/> */}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/whyAcme' element={<WhyAcme/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        <Footer className='footer'/>
      </div>
      </div>
    
    </div>
  );
};

export default App;
