import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Addauser() {
  return (
<div className='w-full mt-[20px] flex gap-[40px] font-semibold font-roboto-condensed justify-center items-center'>
<div className='w-[70%] bg-slate-300 h-[80vh] rounded-xl flex flex-col items-center '>

<div className='px-[10px] flex items-center justify-center h-[40px] mt-[10px] bg-slate-200 rounded-xl'>Enter Your User Data</div>
<div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover mt-[20px]'>
<input type='file' accept='image/*' multiple={false} className='w-[89px] h-[29px] bg-white flex items-center justify-center rounded hover:bg-slate-300'></input>
</div>
<div className='flex flex-wrap  gap-x-[180px] gap-y-[20px] ml-[20px] mr-[20px]'>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Name : </div>
  <input className='w-[200px] bg-slate-100 rounded-sm flex items-center justify-center h-[25px]'></input>
  </div >
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Age : </div>
  <input type="number" className='w-[200px] bg-slate-100 rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Title : </div>
  <input className='w-[200px] bg-slate-100 rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Role : </div>
  <input className='w-[200px] bg-slate-100 rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Salary : </div>
  <input type="number" className='w-[200px] bg-slate-100 rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
 </div>
 <button className='mt-[30px] w-[80px] h-[40px] border-2 border-black bg-lime-400 flex items-center justify-center rounded hover:bg-lime-600 '>Submit</button>
</div>
<div><FaLongArrowAltRight className='text-green-600'/></div>
     <div className='w-[30%] bg-slate-300 h-[80vh] rounded-xl flex flex-col items-center '>

           <div className='px-[10px] flex items-center justify-center h-[40px] mt-[10px] bg-slate-200 rounded-xl'>New User Display</div>
           <div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover mt-[20px]' />
           <div className='flex flex-col'>
            <div>
            <div >Name : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'></div>
            </div>
            <div>
            <div >Age : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'></div>
            </div>
            <div>
            <div >Title : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'></div>
            </div>
            <div>
            <div >Role : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'></div>
            </div>
            <div>
            <div >Salary : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'></div>
            </div>
           </div>
           
    </div>

   
</div>
  )
}
