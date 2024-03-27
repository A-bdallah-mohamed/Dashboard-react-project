import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import Addauser from './addauser';
import '../App.css';
export default function Userinputoverview({data,setdata}) {
  return (
    <>

    <div className='h-[100vh] flex items-center w-full'>
  
    <div className='h-[89vh] w-full ml-[25px] mr-[45px]'>
<div className='font-roboto-condensed font-bold  text-[23px] justify-between flex'>
    <div className='w-[200px] bg-white  rounded shadow-2xl flex items-center justify-center'>User input</div>
 
 
</div>
   <div>

  
   </div>
<Addauser data={data} setdata={setdata} />
</div>
</div>
</>
  )
}
