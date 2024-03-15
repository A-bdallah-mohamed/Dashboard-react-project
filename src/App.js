
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Memberland from './pages/Memberland';
import Sidebar from './compnents/sidebar';


function App() {
  return (
    <>
   

    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route path="/pages/Memberland" element={<Memberland />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;