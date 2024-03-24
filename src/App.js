
import React, { createContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Memberland from './pages/Memberland';
import Sidebar from './compnents/sidebar';
import Adminify from './pages/Adminify';
import Userinput from './pages/Userinput'
import LOGIN from './pages/LOGIN';
import Error from './pages/Error';
import Settings from './pages/Settings';
import  { useEffect, useState } from 'react'
import Database from './DB/database';

export const NewpersontoaddContext = createContext();

function App() {
 
const [mainuser,setmainuser] = useState({
  name: '',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QYwLJsJgc8srsbncqE7mBGwwOcTe4_fe5SRc-fVAVQ&s'
})

const [newperson,setnewperson] = useState({
  img: '',
  name: '',
  title: '',
  age: '',
  salary: '',
  role: ''
})
  const [selectedperson, setselectedperson] = useState(null);
  const [data , setdata] = useState(Database);

  return (
 
   
<NewpersontoaddContext.Provider value={{ newperson,setnewperson }}> 
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Homepage data={data} setdata={setdata} mainuser={mainuser} setmainuser={setmainuser}/>} />
    <Route path="/pages/Memberland" element={<Memberland selectedperson={selectedperson} setselectedperson={setselectedperson} data={data} setdata={setdata}/>} />
    <Route path="/pages/Adminify" element={<Adminify selectedperson={selectedperson} setselectedperson={setselectedperson}  data={data} setdata={setdata}/>} />
    <Route path="/pages/Userinput" element={<Userinput data={data} setdata={setdata} />} />
    <Route path="/pages/LOGIN" element={<LOGIN />} />
    <Route path="/pages/Error" element={<Error />} />
    <Route path="/pages/Settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
  </NewpersontoaddContext.Provider>

  );
}

export default App;

