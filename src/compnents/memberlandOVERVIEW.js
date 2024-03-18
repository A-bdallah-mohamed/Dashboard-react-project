import React, { useEffect, useState } from 'react'
import { PiDotsThreeCircleLight } from "react-icons/pi";
import Database from "../DB/database.js"
import Table from "./table.js"

export default function MemberlandOVERVIEW() {

 const [selectedRole  ,setselectedRole ] =useState(null);


  return (
    <div className='h-[100vh] flex items-center w-full'>
    <div className='h-[89vh] w-full ml-[45px] mr-[45px]'>
<div className='font-roboto-condensed font-bold  text-[23px] justify-between flex'>
    <div className='w-[200px] bg-white pl-5 rounded shadow-2xl'>Member Admin</div>
    <div><button className='w-[200px] flex items-center justify-center bg-lime-400 rounded text-Black shadow-2xl hover:bg-lime-700 hover:' >Add Member +</button> </div>
</div>
   <div>
<div className='font-semibold mt-[15px] flex gap-[20px]  bg-white  border-b-black border-2 rounded shadow-2xl pb-1 pl-1'>
<p className='w-[95px] flex items-center p-2 justify-center  hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('All')}}>All</p>
  <p className='w-[95px] flex items-center p-2 justify-center    hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('senior')}}>Senior</p>
  <p className='w-[95px] flex items-center p-2 justify-center   hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('junior')}}>Junior</p>
  <p className='w-[95px] flex items-center p-2 justify-center  hover:bg-slate-300 cursor-pointer' onClick={()=>{setselectedRole ('mid level')}}>Mid-level</p>
  
  </div>
  
   </div>
<Table selectedRole={selectedRole} />
</div>
</div>
  )
}
