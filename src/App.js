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

import "./index.css"

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <Navbar/>
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' exact element={<Home/>}/> 
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