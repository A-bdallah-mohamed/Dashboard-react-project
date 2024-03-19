import React, { useEffect, useState } from 'react'
import Adjustabletable from './adjustabletable'
import { Link } from 'react-router-dom';

export default function Adminifyoverview({selectedperson,setselectedperson}) {
    
 const [selectedRole  ,setselectedRole ] =useState(null);
const [isthereaperson,setisthereaperson] = useState(false)

useEffect(() => {
  if (selectedperson){
    setisthereaperson(true)
    console.log(isthereaperson)
  }
  else if(!selectedperson){
    setisthereaperson(false)
    console.log(isthereaperson)
  }
},[])

  return (
    <>


<div className='h-[100vh] flex items-center w-full relative'>
 




    


<div className='w-full h-full flex absolute items-center justify-center z-50'>
  <div className=' bg-slate-400 w-[96%] h-[90vh] rounded-2xl flex items-center justify-center flex-col gap-[50px] font-semibold font-roboto-condensed'>
<div className='flex items-center justify-center flex-col gap-[20px]'>
<div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover' style={{backgroundImage:`url(${selectedperson.img})`}}>
<button className='w-[50px] h-[30px] bg-white flex items-center justify-center rounded hover:bg-slate-300'>Edit</button>
</div>  
             <input className='rounded' placeholder={selectedperson.name}></input>    
               
</div>
     <div className='flex items-center justify-center gap-[80px]'>


<div className='flex flex-col gap-[20px]'>
<input className='rounded' placeholder={selectedperson.title}></input>
<input className='rounded' placeholder={selectedperson.age}></input>
</div>


<div className='flex flex-col gap-[20px]'>
<input className='rounded' placeholder={selectedperson.role}></input>
<input className='rounded' placeholder={selectedperson.salary}></input>
</div>


     </div>
     <div>
      <button className='w-[80px] h-[40px] bg-white flex items-center justify-center rounded hover:bg-slate-300'>Submit</button>
     </div>
  </div>
  </div>












    <div className='h-[89vh] w-full ml-[25px] mr-[45px]'>
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
   <Adjustabletable selectedRole={selectedRole}/>
</div>
</div>
</>
  )
}
