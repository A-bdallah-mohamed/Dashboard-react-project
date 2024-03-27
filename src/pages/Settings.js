import React from 'react'
import Sidebar from '../compnents/sidebar'
import { useEffect, useState } from 'react'
import '../App.css';
export default function Settings({mainuser,setmainuser}) {
  useEffect(()=> {
    console.log(mainuser)
  },[])



const [image,setimage] = useState();
const [name,setname] = useState();

const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setimage(event.target.result);

      };
      reader.readAsDataURL(file);
    }
  };

const handleuserinfodata = () => {
  setmainuser(prevMainUser => ({
    ...prevMainUser,
    img: image || prevMainUser.img, 
    name: name || prevMainUser.name 
  }));
}

  return (
    <div className='flex font-roboto-condensed font-semibold'>
    <Sidebar />

    <div className='h-[100vh] flex items-center w-full'>
  
    <div className='h-[89vh] w-full ml-[25px] mr-[45px] flex items-center  flex-col gap-[3%]'>
<div className='font-roboto-condensed font-bold  text-[23px]  flex items-center justify-center'>
    <div className='w-[200px] bg-white  rounded shadow-2xl flex items-center justify-center top-0'>User Info</div>
</div>
<div className='wdthflll w-[95%] h-[99%] bg-slate-300 rounded-xl flex flex-col items-center'>








<div className='flex flex-row mt-[40px] items-center gap-[20px] '>
<div className='min-w-[120px] min-h-[120px] bg-slate-500 rounded-full mr-1 bg-cover flex items-center justify-center' 
    style={{backgroundImage:`url(${image ? image : mainuser.img})`}}
    > <input type='file' accept='image/*' onChange={handleImageChange} multiple={false} className='w-[90px] h-[29px] bg-white flex items-center justify-center rounded hover:bg-slate-300'></input>
    </div>
  <input className='w-[200px] h-[40px] rounded bg-slate-100' onChange={(e) => {setname(e.target.value)}} placeholder=' Enter name : ' />
</div>






<div className='grid grid-cols-4 columngap grid-rows-4 gap-x-[100px]  mt-[50px]'>

<div className='col-span-2'>
    <div className='ml-[5px] text-slate-500'>Email Address : </div>
<input className=' bg-slate-100 rounded'/>
</div>
<div className='col-span-2'>
    <div className='ml-[5px] text-slate-500'>Phone Number : </div>
<input className=' bg-slate-100 rounded'/>
</div>
<div className='col-span-2'>
    <div className='ml-[5px] text-slate-500'>Location : </div>
<input className=' bg-slate-100 rounded'/>
</div>
<div className='col-span-2'>
    <div className='ml-[5px] text-slate-500'>Postal Code : </div>
<input className=' bg-slate-100 rounded'/>
</div>
<div></div>
<div className='col-span-2 flex items-ceter justify-center mt-[20px]'>
<button className='w-[150px] h-[40px] bg-lime-400 px-[5px] rounded-xl hover:bg-lime-600' onClick={handleuserinfodata}>Save Changes</button>
</div>
</div>




</div>
   <div>

  
   </div>

</div>
</div>
    </div>
  )
}
