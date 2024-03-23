import React, { useContext, useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NewpersontoaddContext } from "../App"
import { MdErrorOutline } from "react-icons/md";

export default function Addauser({data,setdata}) {
  const [iserrortrue,setiserrortrue] = useState(false)
  const { newperson, setnewperson } = useContext(NewpersontoaddContext);
  const [issubmitshow,setissubmitshow] = useState(false)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setnewperson({...newperson, img: event.target.result});

      };
      reader.readAsDataURL(file);
    }
  };

const addusertodata = () => {
  if(newperson.name === '' || newperson.age ==='' ||newperson.title === '' ||newperson.salary === '' ||newperson.role === ''){
    setiserrortrue(true)
    console.log('error')
    setTimeout(() => {
      setiserrortrue(false)
    }, 3000);
    } 
else {
  setdata([...data,newperson]);
  setnewperson({
    img: '',
    name: '',
    title: '',
    age: '',
    salary: '',
    role: ''
  })
}

}
 

useEffect(() => {
  console.log(data)
},[data])
  return (
    <>
  <div className={iserrortrue ? `text-red-500 absolute z-50 top-6 right-5 w-[400px] h-[80px] bg-slate-300 border-2 border-black rounded-xl flex items-center justify-center font-semibold font-roboto-condensed transition-all duration-500 ease-in-out ` : 'text-red-500 absolute z-50 top-[-80px] right-5 w-[400px] h-[80px] bg-slate-300 border-2 border-black rounded-xl flex items-center justify-center font-semibold font-roboto-condensed transition-all duration-500 ease-in-out'}>Please add some data   <MdErrorOutline className='ml-[5px] ' />
</div>
<div className='relative w-full mt-[20px] flex gap-[40px] font-semibold font-roboto-condensed justify-center items-center'>
  <div className={issubmitshow ? `absolute w-[100%] h-[100%] bg-slate-400 rounded-lg flex  items-center justify-center gap-[100px] transition-width duration-500 ease-in-out opacity-1 overflow-auto` : 'opacity-0 absolute w-1 pointer-events-none h-[100%] bg-slate-400 rounded-lg flex  items-center justify-center gap-[100px] overflow-hidden transition-width duration-500 ease-in-out'}>
 
<button onClick={()=>setissubmitshow(false)} className='absolute top-2 right-4 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center hover:bg-slate-500'>
    X
</button>
  <div className='w-[350px] bg-slate-300 h-[450px] rounded-xl flex flex-col items-center '>

<div className='px-[10px] flex items-center justify-center h-[40px] mt-[10px] bg-slate-200 rounded-xl'>New User Display</div>
<div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover mt-[20px]' style={{ backgroundImage: `url(${newperson.img})` }} />
<div className='flex flex-col'>
 <div>
 <div >Name : </div>
 <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.name}</div>
 </div>
 <div>
 <div >Age : </div>
 <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.age}</div>
 </div>
 <div>
 <div >Title : </div>
 <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.title}</div>
 </div>
 <div>
 <div >Role : </div>
 <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.role}</div>
 </div>
 <div>
 <div >Salary : </div>
 <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>$ {newperson.salary}</div>
 </div>
</div>

</div>


<button onClick={()=> {setissubmitshow(false);addusertodata()}} className='mt-[30px] w-[80px] h-[40px]  bg-slate-200 flex items-center justify-center rounded hover:bg-slate-300 '>Submit</button>




  </div>
<div className='w-[70%] bg-slate-300 h-[80vh] rounded-xl flex flex-col items-center '>

<div className='px-[10px] flex items-center justify-center h-[40px] mt-[10px] bg-slate-200 rounded-xl'>Enter New User Data</div>
<div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover mt-[20px]' style={{ backgroundImage: `url(${newperson.img})` }} >
<input onChange={handleImageChange} type='file' accept='image/*' multiple={false} className='w-[89px] h-[29px] bg-white flex items-center justify-center rounded hover:bg-slate-300'></input>
</div>
<div className='flex flex-wrap  gap-x-[180px] gap-y-[20px] ml-[20px] mr-[20px]'>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Name : </div>
  <input  onChange={e => setnewperson(prevstate => ({...prevstate, name: e.target.value}))} className='w-[200px] bg-white rounded-sm flex items-center justify-center h-[25px]'></input>
  </div >
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Age : </div>
  <input  onChange={e => setnewperson(prevstate => ({...prevstate, age: e.target.value}))} type="number" className='w-[200px] bg-white rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Title : </div>
  <input  onChange={e => setnewperson(prevstate => ({...prevstate, title: e.target.value}))} className='w-[200px] bg-white rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Role : </div>
  <input  onChange={e => setnewperson(prevstate => ({...prevstate, role: e.target.value}))} className='w-[200px] bg-white rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
  <div>
  <div className=' text-left w-[100px] flex items-center '>Enter Salary : </div>
  <input  onChange={e => setnewperson(prevstate => ({...prevstate, salary: e.target.value}))} type="number" className='w-[200px] bg-white   rounded-sm flex items-center justify-center h-[25px]'></input>
  </div>
 </div>
 <button onClick={()=> setissubmitshow(true)} className='mt-[30px] w-[80px] h-[40px] border-2 border-black bg-lime-400 flex items-center justify-center rounded hover:bg-lime-600 '>Submit</button>
</div>
<div><FaLongArrowAltRight className='text-green-600'/></div>
     <div className='w-[30%] bg-slate-300 h-[80vh] rounded-xl flex flex-col items-center '>

           <div className='px-[10px] flex items-center justify-center h-[40px] mt-[10px] bg-slate-200 rounded-xl'>New User Display</div>
           <div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover mt-[20px]' style={{ backgroundImage: `url(${newperson.img})` }} />
           <div className='flex flex-col'>
            <div>
            <div >Name : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.name}</div>
            </div>
            <div>
            <div >Age : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.age}</div>
            </div>
            <div>
            <div >Title : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.title}</div>
            </div>
            <div>
            <div >Role : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>{newperson.role}</div>
            </div>
            <div>
            <div >Salary : </div>
            <div className='w-[200px] bg-slate-100 rounded-xl flex items-center justify-center h-[25px]'>$ {newperson.salary}</div>
            </div>
           </div>
           
    </div>

   
</div>
</>
  )
}
