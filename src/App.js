
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Memberland from './pages/Memberland';
import Sidebar from './compnents/sidebar';
import Adminify from './pages/Adminify';
import Userinput from './pages/Userinput'
import Calendar from './pages/Calendar';
import Accordion from './pages/Accordion';
import Settings from './pages/Settings';
import  { useEffect, useState } from 'react'

function App() {
  const [selectedperson, setselectedperson] = useState(null);


  return (
    <>
   

    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route path="/pages/Memberland" element={<Memberland selectedperson={selectedperson} setselectedperson={setselectedperson}/>} />
    <Route path="/pages/Adminify" element={<Adminify selectedperson={selectedperson} setselectedperson={setselectedperson} />} />
    <Route path="/pages/Userinput" element={<Userinput />} />
    <Route path="/pages/Calendar" element={<Calendar />} />
    <Route path="/pages/Accordion" element={<Accordion />} />
    <Route path="/pages/Settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
