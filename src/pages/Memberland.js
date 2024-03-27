import React from 'react'
import Sidebar from '../compnents/sidebar'
import MemberlandOVERVIEW from '../compnents/memberlandOVERVIEW'
import { useEffect, useState } from 'react'
import '../App.css';
export default function Memberland({selectedperson ,setselectedperson,data,setdata}) {


  useEffect(()=> {
    console.log(selectedperson)
    },[])
  return (
    <div className='flex '>
 <Sidebar />
 <MemberlandOVERVIEW selectedperson={selectedperson} setselectedperson={setselectedperson} data={data} setdata={setdata}/>
 </div>
  )
}
