import React from 'react'

import Database from "../DB/database.js"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import  { useEffect, useState } from 'react'

export default function Adjustabletable() {
     
const [data , setdata] = useState(Database);
const [filtereddata,setfiltereddata] = useState(Database)
const [settingmenuon,setsettingmenuon] = useState(false)

const setting = (index) => {
    if(settingmenuon === index) {
        setsettingmenuon(null);
    }
else {
    setsettingmenuon(index)
}
  };



 
  return (
    <>
    <div className='w-[80%] text-xs flex flex-col font-semibold  bg-white  border-b-black border-2 rounded shadow-2xl pb-1 h-[70vh] '>
    <div className='flex items-center w-full h-15   p-3  grid grid-cols-7 gap-2 border-b-black border-2  border-white text-gray-400'>
    <p>Select</p>
    <p className='col-span-2'>Image/Name</p>
    <p>Title</p>
    <p>Age</p>
    <p>Salary</p>
    <p>Role</p>
    </div>
    
    <div className='overflow-auto'>
    
    
    {filtereddata.map((person, index) => (
        <>
   
    
    <div className='px-3 py-3 grid grid-cols-7 gap-2 hover:bg-slate-100 relative'>
    <div >
    <input type='checkbox'></input>
    </div>
    <div className='flex items-center col-span-2 '>
   
    <div className='min-w-8 min-h-8 bg-slate-500 rounded-full mr-1 bg-cover' 
    style={{backgroundImage:`url(${person.img})`}}
    />

    <p>{person.name}</p>
    </div>
    <div className='flex items-center'>
      <p>{person.title}</p>
    </div>
    <div className='flex items-center'>
      <p>{person.age}</p>
    </div>
    <div className='flex items-center'>
      <p>$ {person.salary}</p>
    </div>
    <div className='flex items-center'>
      <p>{person.role}</p>
    </div>
   
    </div>
    </>
    ))}
    
    </div>
    
    
      </div>
 
    </>
  )
}
