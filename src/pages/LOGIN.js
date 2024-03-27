import React from 'react'
import { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import '../App.css';
export default function LOGIN() {


  const [isitlogin,setisitlogin] = useState(true)
  const handleclick = () => {
    setisitlogin(prev => !prev)
    console.log(isitlogin)
  }
  return (
    <div className='flex '>
 

<div className='w-full h-[100vh] flex items-center justify-center font-roboto-condensed font-semibold bg-white ' >

<div className='w-full h-full  flex relative items-center justify-center'>


<div className='h-[100%] w-[100%] '>

<div className={isitlogin ? `right-0 absolute w-[50%] bg-lime-400 h-[100%] transition-all duration-1000 ease-in-out  overflow-hidden z-40 ` : ' overflow-hidden right-[50%] absolute w-[50%] bg-lime-400 h-[100%] transition-all duration-1000 ease-in-out z-40'} >
  <div className={isitlogin ? `rightedit1 smalltext text-center absolute top-[30%] right-[23%] transition-all duration-1000 ease-in-out whitespace-nowrap ` : 'smalltext text-center whitespace-nowrap absolute top-[30%] right-[-155%]  transition-all duration-1000 ease-in-out' }>
    <div className='text-6xl  smalltexttitle'>Hello, Friend!</div>
    <div className='smallxtext'><br />To keep connected with us please<br /> enter your personal info</div>
  </div>
  <div className={isitlogin ? `text-center absolute top-[30%] left-[-150%] transition-all duration-1000 ease-in-out whitespace-nowrap ` : 'rightwelcome text-center whitespace-nowrap absolute top-[30%] left-[25%]  transition-all duration-1000 ease-in-out' }>
  <div className='text-6xl smalltexttitle'>Welcome Back! </div>
    <div className='smallxtext'><br />Enter your personal details and<br />  start your journey with us</div>
  </div>
  <div onClick={handleclick} className={isitlogin ? `truebtnedit overflow-hidden absolute top-[65%] left-[37%] hover:w-[165px] transition-all duration-1000 ease-in-out whitespace-nowrap bg-lime-400 border-[3px] border-white rounded-2xl w-[155px] h-[40px] hover:h-[50px] hover:bg-lime-200 cursor-pointer` : ' hover:h-[50px] overflow-hidden h-[40px] whitespace-nowrap absolute top-[65%] left-[33%] bg-lime-400 border-[3px] border-white rounded-2xl w-[250px] falsebtnedit   transition-all duration-1000 ease-in-out hover:bg-lime-200 cursor-pointer' }>
    <div className={isitlogin ? 'absolute top-[20%] left-[35%] transition-all duration-1000 ease-in-out' : 'top-[20%] left-[100%] absolute opacity-0 transition-all duration-1000 ease-in-out'}>Sign In</div>
    <div className={isitlogin ? 'top-[20%] right-[100%] absolute opacity-0 transition-all duration-1000 ease-in-out' : 'falsebtnsignup absolute top-[20%] right-[40%] transition-all duration-1000 ease-in-out'}>Sign Up</div>
  </div>
  </div>

</div>

<div className='h-[100%] w-[100%]'>

<div>
<div className=' w-[50%] h-[100%] absolute right-0 flex items-center justify-center overflow-hidden '>

<div className={isitlogin ? `signintrue px-[100px] text-center whitespace-nowrap absolute left-[-50%] transition-all duration-1000 ease-in-out` : 'signinfalse px-[100px] text-center whitespace-nowrap absolute left-[-4%] transition-all duration-1000 ease-in-out'}>
<div className='text-6xl smalltexttitle'>Sign in to StatStation</div>
  <div className='flex items-center justify-center gap-[10px] mt-[25px]'>
<div className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-black rounded-full hover:bg-slate-200 cursor-pointer'><FaFacebookF /></div>
<div className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-black rounded-full hover:bg-slate-200 cursor-pointer'><IoLogoGoogleplus /></div>
<div className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-black rounded-full hover:bg-slate-200 cursor-pointer'><FaLinkedinIn /></div>
  </div>
  <div className='mt-[20px] text-slate-400'>Or use your email accout.</div>
  <form className='flex items-center justify-center flex-col gap-[10px] mt-[10px]'>
    <input placeholder=' Email' className='inputedit w-[300px] h-[40px] bg-slate-100 rounded'></input>
    <input placeholder=' Password' className='inputedit w-[300px] h-[40px] bg-slate-100 rounded'></input>
   <div className='underline underline-offset-4 cursor-pointer text-md hover:text-lg hover:underline-offset-8 transition-all duration-200 ease-in-out'>Forgot your password ?</div>
    <button type='submit' className='w-[200px] h-[55px] bg-lime-300 rounded-full mt-[10px] text-xl hover:bg-lime-500'>Sign In</button>
  </form>
</div>

</div>
<div className=' w-[50%] h-[100%] absolute left-0 flex items-center justify-center overflow-hidden'>

<div className={isitlogin ? `logintrueedit px-[100px] text-center whitespace-nowrap absolute right-[5%] transition-all duration-1000 ease-in-out` : 'createfalse px-[100px] text-center whitespace-nowrap absolute right-[-50%] transition-all duration-1000 ease-in-out'}>
  <div className='text-6xl smalltexttitle'>Create Account</div>
  <div className='flex items-center justify-center gap-[10px] mt-[25px]'>
<div className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-black rounded-full hover:bg-slate-200 cursor-pointer'><FaFacebookF /></div>
<div className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-black rounded-full hover:bg-slate-200 cursor-pointer'><IoLogoGoogleplus /></div>
<div className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-black rounded-full hover:bg-slate-200 cursor-pointer'><FaLinkedinIn /></div>
  </div>
  <div className='mt-[20px] text-slate-400'>Or use your email for registration.</div>
  <form className='flex items-center justify-center flex-col gap-[10px] mt-[10px]'>
    <input placeholder=' Name'className=' inputedit w-[300px] h-[40px] bg-slate-100 rounded'></input>
    <input placeholder=' Email' className=' inputedit w-[300px] h-[40px] bg-slate-100 rounded'></input>
    <input placeholder=' Password' className=' inputedit w-[300px] h-[40px] bg-slate-100 rounded'></input>
    <button type='submit' className='w-[200px] h-[55px] bg-lime-300 rounded-full mt-[20px] text-xl hover:bg-lime-500'>Sign Up</button>
  </form>
 
</div>

</div>

</div>
</div>
</div>

</div>









 </div>
  )
}
