import React from 'react'
import useStyles from './styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Popular from './components/Popular/Popular';
import Trend from './components/Trend/Trend';
import Banner from './components/Banner/Banner';
import { useState,useEffect } from 'react';
import "./index.css"

function App() {

  const[showBanner,setShowBanner]=useState(0);

  const [bright,setBright]=useState('brightness(100%)');

  useEffect(()=>{
      if(showBanner){
        setBright("brightness(50%)");
        }
        else
        {
          setBright("brightness(100%)");
        }
    }
    );

  const classes = useStyles();
  return (
    <BrowserRouter>
    <Navbar filt={bright}/>
    <Banner  hook={showBanner} func={setShowBanner}  filt={bright}/>
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' exact element={<Home hook={showBanner} func={setShowBanner} filt={bright}/>}/> 
          <Route path='/movies' exact element={<Movies/>}/>
          <Route path='/series' exact element={<Series/>}/>
          <Route path='/popular' exact element={<Popular/>}/>
          <Route path='/trend' exact element={<Trend/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App