import React from 'react'
import '../App.css';
import Database from "../DB/database.js"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import  { useEffect, useState } from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";


export default function Adjustabletable({selectedRole}) {
const [isChecked, setIsChecked] = useState(false);
const [data , setdata] = useState(Database);
const [filtereddata,setfiltereddata] = useState(Database)
const [settingmenuon,setsettingmenuon] = useState(false)
const [checkeditems, setcheckeditems] = useState([]);
const [deleteicon,setdeleteicon] = useState(false);



const handleCheckboxChange = (event,person,index) => {
  const updatedItems = [...checkeditems]
if (event.target.checked){
   updatedItems.push(person)

}
else{
let personindex = updatedItems.indexOf(person);
if(personindex !== -1){
updatedItems.splice(personindex, 1);
}
}  
setcheckeditems(updatedItems)
  }


    useEffect(() => {
      if(checkeditems.length>=1){
        setdeleteicon(true)
      }
      else if(checkeditems.length=0){
        setdeleteicon(false)
      }
console.log('deleteicon is : ', deleteicon , checkeditems.length)
    },[checkeditems])

    





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
    
    <div className='custom-scrollbar w-[102%] text-xs flex flex-col font-semibold mt-[15px] bg-white  border-b-black border-2 rounded shadow-2xl pb-1 h-[70vh] '>
    <div className='flex items-center w-full h-15   p-3  grid grid-cols-9 gap-10 border-b-black border-2  border-white text-gray-400'>
    <p>Select</p>
    <p className='col-span-2'>Image/Name</p>
    <p className='col-span-2'>Title</p>
    <p>Age</p>
    <p>Salary</p>
    <p>Role</p>
    <p className='flex items-center justify-center'>Edit</p>
    </div>
    
    <div className='overflow-auto'>
    
    
    {filtereddata.map((person,index) => (
        <>
   
    
    <div key={person} className={`px-3 py-3 grid grid-cols-9 gap-10 hover:bg-slate-100 relative  ${checkeditems.includes(person) ? 'bg-slate-300 hover:bg-slate-300' : ''}`}>
    <div className='flex items-center justify-center'>
    <input type='checkbox' checked={checkeditems.includes(person)} onChange={(e)=>{handleCheckboxChange(e,person,index)}}></input>
    </div>
    <div className='flex items-center  col-span-2 '>
   
    <div className='min-w-8 min-h-8 bg-slate-500 rounded-full mr-1 bg-cover' 
    style={{backgroundImage:`url(${person.img})`}}
    />

<div className='flex items-center'>
  <p className='w-[100px]'>{person.name}</p>
</div>




    </div>
    <div className='flex items-center col-span-2'>
     
     
      <p>{person.title}</p>
      
      
   
    </div>
    <div className='flex items-center'>
     
     
      <p>{person.age}</p> 
      
      
   
    </div>
    <div className='flex items-center'>
     
     
      <p className='whitespace-nowrap'>$ {person.salary}</p>
      
      
   
    </div>
    <div className='flex items-center'>
    
    
      <p className='flex items-center whitespace-nowrap'>{person.role}</p>
      
      
     
    </div>
    <div className='flex items-center justify-center'>{checkeditems.length > 0 ? <p className={`text-xl ${checkeditems.includes(person) ? 'text-red-500 curser cursor-pointer text-xl' : 'hidden'}`}><IoTrashOutline />
</p> : <AiOutlineEdit className='cursor-pointer text-lg hover:text-blue-700'/>}
</div>
    </div>

    </>
    ))}
    
    </div>
    
    
      </div>
 
    </>
  )
}
