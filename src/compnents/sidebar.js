import React from 'react'
import whitelogo from '../logos/black-logo.PNG'
import { Link , useLocation } from 'react-router-dom';


export default function Sidebar() {
  const location = useLocation();

  return (
    <>
    <div className='h-[100vh] flex items-center '>
    <div className='relative  shadow-2xl overflow-hidden flex flex-col w-[155px] h-[90vh] ml-[35px] items-center gap-[25px] bg-black px-4 py-5 rounded-md '>
    <img src={whitelogo}></img>
    <ul className='text-white font-roboto-condensed'>
      <Link to='/'>
        <li className={location.pathname === '/' ? 'font-semibold flex items-center w-[120px] justify-center h-[35px]	bg-lime-400 rounded-xl hover:bg-lime-700  mb-3 ' : 'font-semibold flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 '}>
       <p>Dashboard</p>
        </li>
        </Link>
        <Link to='/pages/Memberland'>
        <li className={location.pathname === '/pages/Memberland' ? 'font-semibold flex items-center w-[120px] justify-center h-[35px]	bg-lime-400 rounded-xl hover:bg-lime-700  mb-3 ' : 'font-semibold flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 '}>
       <p>Memberland</p>
        </li>
        </Link>
        <Link to='/pages/Adminify'>
         <li className={location.pathname === '/pages/Adminify' ? 'font-semibold flex items-center w-[120px] justify-center h-[35px]	bg-lime-400 rounded-xl hover:bg-lime-700  mb-3 ' : 'font-semibold flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 '}>
       <p>Adminify</p>
        </li>
        </Link>
         <li className={location.pathname === '/pages/Userinput' ? 'font-semibold flex items-center w-[120px] justify-center h-[35px]	bg-lime-400 rounded-xl hover:bg-lime-700  mb-3 ' : 'font-semibold flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 '}>
       <p>Userinput</p>
        </li>
         <li className={location.pathname === '/pages/Calendar' ? 'font-semibold flex items-center w-[120px] justify-center h-[35px]	bg-lime-400 rounded-xl hover:bg-lime-700  mb-3 ' : 'font-semibold flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 '}>
       <p>Calendar</p>
        </li>
         <li className={location.pathname === '/pages/Accordion' ? 'font-semibold flex items-center w-[120px] justify-center h-[35px]	bg-lime-400 rounded-xl hover:bg-lime-700  mb-3 ' : 'font-semibold flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 '}>
       <p>Accordion </p>
        </li>
        
    </ul>
    <li className={location.pathname === '/pages/Settings' ? 'font-semibold absolute flex items-center w-[120px] justify-center h-[35px]	bg-cyan-400 rounded-xl hover:bg-cyan-700 bottom-5' : 'font-semibold absolute flex items-center w-[120px] justify-center h-[35px]	 rounded-xl bg-slate-200 text-black mb-3 hover:bg-slate-400 bottom-2'}>
       <p>Settings </p>
        </li>
    </div>
    </div>
    </>
  )
}
