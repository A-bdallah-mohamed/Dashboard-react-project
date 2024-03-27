import React from 'react'
import { useEffect, useState } from 'react'
import whitelogo from '../logos/black-logo.PNG'
import Calendar from 'react-calendar'
import '../App.css';
export default function Overview({data,setdata,mainuser,setmainuser}) {


const firstthreepeople = data.slice(0,5)
const randomperson = data.slice(-1)[0]

useEffect(()=> {
  console.log(randomperson)

},[randomperson])


  const  ValuePiece = Date | null;

  const Value = ValuePiece | [ValuePiece, ValuePiece];
  
  function MyApp() {
    const [value, onChange] = useState<Value>(new Date());
  }  

  useEffect(() => {
    // Load the ripple.js script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>

    <div className='h-[100vh] flex items-center w-full font-roboto-condensed font-semibold'>
        <div className='h-[89vh] w-full ml-[45px] mr-[45px]'>






          
    <div className='font-roboto-condensed font-bold  text-[23px] justify-between flex items-center smalltext'>
        <div>Welcome back {mainuser.name} 👋</div>
        <div className='flex items-center'> 
        <button className='downloadbutton middle none center rounded-lg bg-lime-400 py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-lime-600/20 transition-all hover:shadow-lg hover:shadow-lime-500/40 focus:opacity-[0.95] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-[20px]'  data-ripple-light="true">Download Free</button>
        <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] bg-slate-500 flex items-center justify-center rounded-full bg-cover' style={{backgroundImage: `url(${mainuser.img})`}}/>
        </div>
    </div>



<div className='gridoverview grid grid-cols-6 gap-[35px] grid-rows-4 mt-[25px]'>

<div data-ripple-light="true" className='flex-col col-span-4 row-span-2 p-5 cursor-pointer bg-slate-300 shadow-md shadow-slate-400 hover:shadow-2xl hover:shadow-slate-600 transition-shadow    rounded-xl items-center flex '>
  {firstthreepeople.map ((person) => (
 
 <div className='overviewtable px-3 py-3 grid grid-cols-5 gap-2 hover:bg-slate-100 relative text-xs rounded-lg'>
 <div className='flex items-center w-[100px] h-[10px]'>
 <div className='min-w-8 min-h-8 bg-slate-500 rounded-full mr-1 bg-cover' 
 style={{backgroundImage:`url(${person.img})`}}
 />
 <p>{person.name}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px] displaynone'>
   <p>{person.title}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px] displaynone'>
   <p>{person.age} Yrs</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px]'>
   <p>$ {person.salary}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px]'>
   <p>{person.role}</p>
 </div>
 <div className='top-[20px] right-3 flex items-center absolute text-xl cursor-pointer'>


 </div>
 </div>
  ))}
</div>


<div data-ripple-light="true" className='example p-5 text-white cursor-pointer bg-zinc-900 shadow-md shadow-zinc-900 hover:shadow-2xl hover:shadow-zinc-900 transition-shadow row-span-2 col-span-2 rounded-xl  flex flex-col'>
<div>
  <img src={whitelogo} className='max-w-[105px] shadow-2xl shadow-black h-auto rounded-xl'></img>
  <div className='text-3xl'>Go Premium</div>
  <div className='text-sm'>Explore 25K+ Dashboard Templates With StatStation</div>
</div>
</div>

<div data-ripple-light="true" className='items-center p-2 cursor-pointer bg-slate-300 shadow-md shadow-slate-400 hover:shadow-2xl hover:shadow-slate-600 transition-shadow col-span-4 rounded-xl  flex flex-col'>
  <div>Last Added Employee</div>
  
    <div className='overviewtable px-3 py-3 grid grid-cols-5 gap-2 hover:bg-slate-100 relative text-xs rounded-lg'>
 <div className='flex items-center w-[100px] h-[10px]'>
 <div className='min-w-8 min-h-8 bg-slate-500 rounded-full mr-1 bg-cover' 
 style={{backgroundImage:`url(${randomperson.img})`}}
 />
 <p>{randomperson.name}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px] displaynone '>
   <p>{randomperson.title}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px] displaynone '>
   <p>{randomperson.age}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px]'>
   <p>$ {randomperson.salary}</p>
 </div>
 <div className='flex items-center w-[100px] h-[10px]'>
   <p>{randomperson.role}</p>
 </div>
 <div className='top-[20px] right-3 flex items-center absolute text-xl cursor-pointer'>


 </div>
 </div></div>



<div data-ripple-light="true" className='row-span-2 p-5 cursor-pointer bg-slate-300 shadow-md shadow-slate-400 hover:shadow-2xl hover:shadow-slate-600 transition-shadow h-[200px] col-span-2 rounded-xl items-center flex justify-center flex-col '>
  <Calendar onChange={onchange} value={Value}  />
</div>

</div>





    <div>
    </div>
    </div>
    </div>
    </>
  )
}
