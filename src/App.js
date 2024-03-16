
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Memberland from './pages/Memberland';
import Sidebar from './compnents/sidebar';
<<<<<<< HEAD

=======
import Adminify from './pages/Adminify';
>>>>>>> origin

function App() {
  return (
    <>
   

    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route path="/pages/Memberland" element={<Memberland />} />
<<<<<<< HEAD
=======
    <Route path="/pages/Adminify" element={<Adminify />} />
>>>>>>> origin
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
