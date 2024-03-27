import React, { useEffect, useState } from 'react'
import { PiDotsThreeCircleLight } from "react-icons/pi";
import Database from "../DB/database.js"
import Table from "./table.js"
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../App.css';
export default function MemberlandOVERVIEW({selectedperson,setselectedperson,data,setdata}) {

 const [selectedRole  ,setselectedRole ] =useState(null);


  return (
    <>

    <div className='h-[100vh] flex items-center w-full'>
  
    <div className='h-[89vh] w-full ml-[25px] mr-[45px]'>
<div className='font-roboto-condensed font-bold  text-[23px] justify-between flex'>
    <div className='w-[200px] bg-white  rounded shadow-2xl flex items-center justify-center'>Memberland</div>
    <Link to='/pages/Adminify'>
    <div><button className='w-[200px] flex items-center justify-center bg-lime-400 rounded text-Black shadow-2xl hover:bg-lime-700 hover:' >Edit Members <AiOutlineEdit /></button> </div></Link>
</div>
   <div>
<div className='font-semibold mt-[15px] flex gap-[20px]  bg-white  border-b-black border-2 rounded shadow-2xl pb-1 pl-1'>
<p className='w-[95px] flex items-center p-2 justify-center  hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('All')}}>All</p>
  <p className='w-[95px] flex items-center p-2 justify-center    hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('senior')}}>Senior</p>
  <p className='w-[95px] flex items-center p-2 justify-center   hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('junior')}}>Junior</p>
  <p className='w-[95px] flex items-center p-2 justify-center  hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('mid level')}}>Mid-level</p>
  
  </div>
  
   </div>
<Table selectedRole={selectedRole} selectedperson={selectedperson} setselectedperson={setselectedperson} data={data} setdata={setdata}/>
</div>
</div>
</>
  )
}
