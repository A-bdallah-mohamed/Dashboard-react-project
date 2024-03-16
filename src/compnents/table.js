import React from 'react'
import Database from "../DB/database.js"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import  { useEffect, useState } from 'react'

export default function Table({selectedRole}) {

    
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



useEffect(() => {
  if(selectedRole === 'senior'){
    const filtered = data.filter(person => person.role === 'senior')
    setfiltereddata(filtered);
  }
 else if(selectedRole === 'junior'){
    const filtered = data.filter(person => person.role === 'junior')
    setfiltereddata(filtered);
  }
  else if(selectedRole === 'mid level'){
    const filtered = data.filter(person => person.role === 'mid level')
    setfiltereddata(filtered);
  }
  else if(selectedRole === 'All'){
    setfiltereddata(data);
  }
},[selectedRole]);

 

  return (
    <>
    <div className='text-xs flex flex-col font-semibold mt-[15px] bg-white  border-b-black border-2 rounded shadow-2xl pb-1 h-[70vh] '>
    <div className='flex items-center w-full h-15   p-3  grid grid-cols-5 gap-2 border-b-black border-2  border-white text-gray-400'>
    <p>Image/Name</p>
    <p>Title</p>
    <p>Age</p>
    <p>Salary</p>
    <p>Role</p>
    </div>
    
    <div className='overflow-auto'>
    
    
    {filtereddata.map((person, index) => (
    
    <div className='px-3 py-3 grid grid-cols-5 gap-2 hover:bg-slate-100 relative'>
    <div className='flex items-center'>
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
    <div className='top-[20px] right-3 flex items-center absolute text-xl cursor-pointer'>
      <p onClick={() => {setting(index)}}><PiDotsThreeCircleLight /></p>
      <div className={settingmenuon === index ? 'absolute w-[180px] h-[80px] bg-slate-200 mt-28 right-5 z-50 rounded  flex flex-col  py-1 overflow-hidden transition-all duration-300 ease-in-out opacity-100' : 'absolute w-[180px] h-1    bg-slate-200 mt-28 right-5 z-50 rounded  flex flex-col  py-1 overflow-hidden transition-all duration-300 ease-in-out opacity-0'}>
        <div className='h-4 right-0 text-sm px-2 flex justify-end mb-1 '>
            <div onClick={()=>{setsettingmenuon(false)}} className='hover:transition-all hover:duration-200 hover:ease-in-out hover:bg-slate-300 h-5 w-5 rounded-full flex items-center justify-center'>X</div>
        </div>
        <div className='text-base px-2 hover:bg-slate-300 py-1 hover:transition-all hover:duration-200 hover:ease-in-out flex items-center justify-center'>Adminify</div>
      
      </div>
    </div>
    </div>
    
    ))}
    
    </div>
    
    
      </div>
 
    </>
  )
}
