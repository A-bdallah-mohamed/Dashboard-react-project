import React, { useEffect } from 'react'
import {useState } from 'react'

export default function Editableperson({selectedperson,setselectedperson}) {

  return (
  
    

<>
    <div className={selectedperson ? 'w-full h-full flex absolute items-center justify-center z-50 transition-all duration-500 ease-in-out' : 'ml-[50%] w-[1px] h-[1px] flex absolute items-center justify-center z-50 overflow-hidden opacity-0 pointer-events-none transition-all duration-500 ease-in-out'} >

    <div className='relative bg-slate-400 w-[90%] h-[80vh] rounded-2xl flex items-center justify-center flex-col gap-[50px] font-semibold font-roboto-condensed'>

<button onClick={()=>setselectedperson(null)} className='absolute top-2 right-4 w-[30px] h-[30px] rounded-full bg-slate-300 flex items-center justify-center hover:bg-slate-500'>
    X
</button>
<form className='flex flex-col gap-[50px] items-center justify-center'>
  <div className='flex items-center justify-center flex-col gap-[20px]'>
  <div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover' style={{backgroundImage: selectedperson ? `url(${selectedperson.img})` : ''}}>
  <input type='file' accept='image/*'  multiple={false} className='w-[89px] h-[29px] bg-white flex items-center justify-center rounded hover:bg-slate-300'></input>
  </div>  

               <input className='rounded' placeholder={selectedperson ? `name : ${selectedperson.name}` : 'employee title'}></input>    
                 
  </div>
       <div className='flex items-center justify-center gap-[80px]'>
  
  
  <div className='flex flex-col gap-[20px]'>
  <input className='rounded' placeholder={selectedperson ? `title : ${selectedperson.title}` : 'employee title'}></input>
  <input type="number" className='rounded' placeholder={selectedperson ? `age : ${selectedperson.age}` : 'employee age'}></input>
  </div>
  
  
  <div className='flex flex-col gap-[20px]'>
  <input className='rounded' placeholder={selectedperson ? `role : ${selectedperson.role}` : 'employee role'}></input>
  <input type="number"  className='rounded' placeholder={selectedperson ? `salary : $${selectedperson.salary}` : '$ employee salary'}></input>
 
  </div>

  
       </div>
       <div>
        <button type='submit' className='w-[80px] h-[40px] bg-white flex items-center justify-center rounded hover:bg-slate-300'>Submit</button>
       </div>
       </form>
    </div>
    </div>
  
</>





  );
}
