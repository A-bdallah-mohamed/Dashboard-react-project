import React from 'react'
import Sidebar from '../compnents/sidebar'
import { useEffect, useState  } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className='flex '>
   
<div className='w-full h-[100vh]  flex items-center justify-center flex-col gap-0 font-roboto-condensed bg-white '>
<div className='error w-[500px] flex flex-col items-center justify-center text-center'>
<div className='font-bold text-8xl'>404</div>  
<div className='font-semibold text-2xl'>Oops!, Page not Found </div>

<div className='text-sm mt-[15px] mb-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

<Link to='/'>
<button className='w-[150px] h-[50px] border-4 border-black rounded-full bg-slate-100 hover:bg-slate-200'>Go Back Home</button>
</Link>

</div>
</div>
 </div>
  )
}
