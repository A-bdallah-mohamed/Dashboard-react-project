import React, { useEffect } from 'react'
import {useState } from 'react'
import '../App.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";



export default function Editableperson({selectedperson,setselectedperson, data , setdata}) {
  const [image,setimage] = useState(null)
 const [iserrortrue,setiserrortrue] = useState(false)
const [showprocceedmenu,setshowprocceedmenu] = useState(false);
  const [persontoedit,setpersontoedit] = useState({
    img: '',
    name: '',
    title: '',
    age: '',
    salary: '',
    role: ''
  });
  

useEffect(()=> {
console.log('person to edit ',persontoedit)

console.log('selected person ',selectedperson)
},[persontoedit,selectedperson])



  const handleinputchange = (event) => {
    const {name,value} = event.target
    setpersontoedit({...persontoedit,[name]: value})
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setpersontoedit({...persontoedit, img: event.target.result});

      };
      reader.readAsDataURL(file);
    }
  };



  const editperson = (person) => {
    const indexofeditperson = data.indexOf(person)
if(persontoedit.name === '' || persontoedit.age ==='' ||persontoedit.title === '' ||persontoedit.salary === '' ||persontoedit.role === ''){
setiserrortrue(true)
setTimeout(() => {
  setiserrortrue(false)
}, 3000);
} 

   
    else if (indexofeditperson !== -1){
  data.splice(indexofeditperson,1,persontoedit)
    }
  
  }


  return (
  
    

<>


<div className={iserrortrue ? `border-2 border-black text-red-500 absolute z-50 top-6 right-5 w-[400px] h-[80px] bg-slate-300 rounded-xl flex items-center justify-center font-semibold font-roboto-condensed transition-all duration-500 ease-in-out ` : 'border-2 border-black text-red-500 absolute z-50 top-[-80px] right-5 w-[400px] h-[80px] bg-slate-300 rounded-xl flex items-center justify-center font-semibold font-roboto-condensed transition-all duration-500 ease-in-out'}>Please add some data   <MdErrorOutline className='ml-[5px] ' />
</div>
    <div className={selectedperson ? 'font-semibold font-roboto-condensed w-full h-full flex absolute items-center justify-center z-40 transition-width duration-500 ease-in-out opacity-1' : 'opacity-0 font-semibold font-roboto-condensed ml-[50%] w-[1px] h-full flex absolute items-center justify-center z-40 overflow-hidden pointer-events-none transition-width duration-500 ease-in-out'} >
   
 
<div className={showprocceedmenu ? 'rounded-2xl absolute z-40 w-[98%] h-[75vh] border-2 border-black flex items-center justify-center bg-slate-300 transition-width duration-500 ease-in-out overflow-hidden opacity-1' : 'flex items-center justify-center opacity-0 rounded-2xl z-40  absolute w-[1px] h-[75vh]  pointer-events-none transition-width duration-500 ease-in-out overflow-hidden'}>

<button onClick={()=>setshowprocceedmenu(false)} className='absolute top-2 right-4 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center hover:bg-slate-500'>
    X
</button>
<div className='flex flex-col items-center justify-center gap-[50px]'>
<div className='flex items-center justify-center gap-[100px]'>
  <div className='gap-[20px] flex flex-col text-xs' >


  <div className='flex items-center justify-center flex-col gap-[20px]'>
  <div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover' style={{backgroundImage: selectedperson ? `url(${selectedperson.img})` : ''}}>
  
  </div>  

  <div className='flex'>
      <p>name : </p>
  <div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {selectedperson? selectedperson.name : ''}</div>
  </div>    
                 
  </div>
       <div className='flex items-center justify-center gap-[80px]'>
  
  
  <div className='flex flex-col gap-[20px] '>
    <div className='flex'>
      <p className='w-[40px]'>title : </p>
  <div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {selectedperson? selectedperson.title : ''}</div>
  </div>
  <div className='flex'>
      <p className='w-[40px]'>age : </p>
  <div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {selectedperson? selectedperson.age : ''}</div>
  </div>
  </div>
  
  
  <div className='flex flex-col gap-[20px] '>
  <div className='flex'>
      <p className='w-[40px]'>role : </p>
  <div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {selectedperson? selectedperson.role : ''}</div>
  </div>
  <div className='flex'>
      <p className='w-[40px]'>salary : </p>
  <div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'>$ {selectedperson? selectedperson.salary : ''}</div>
  </div>
 
  </div>

  
       </div>




  </div>
  <div><FaLongArrowAltRight className='text-green-600'/></div>
  <div className='gap-[20px] flex flex-col text-xs'>


<div className='flex items-center justify-center flex-col gap-[20px]'>
<div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover' style={{backgroundImage: persontoedit.img ? `url(${persontoedit.img})` : ''}}>

</div>  

<div className='flex'>
    <p>name : </p>
<div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {persontoedit ? persontoedit.name : ''}</div>
</div>    
               
</div>
     <div className='flex items-center justify-center gap-[80px]'>


<div className='flex flex-col gap-[20px]'>
  <div className='flex'>
    <p className='w-[40px]'>title : </p>
<div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {persontoedit ? persontoedit.title : ''}</div>
</div>
<div className='flex'>
    <p className='w-[40px]'>age : </p>
<div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {persontoedit ? persontoedit.age: ''} </div>
</div>
</div>


<div className='flex flex-col gap-[20px]'>
<div className='flex'>
    <p className='w-[40px]'>role : </p>
<div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'> {persontoedit ? persontoedit.role : ''}</div>
</div>
<div className='flex'>
    <p className='w-[40px]'>salary : </p>
<div className='w-[100px] bg-slate-100 rounded flex items-center justify-center ml-2'>$ {persontoedit ? persontoedit.salary : ''}</div>
</div>

</div>


     </div>




</div>

</div> 
<button onClick={()=>{editperson(selectedperson);setselectedperson(null);setshowprocceedmenu(false);setpersontoedit({
    img: '',
    name: '',
    title: '',
    age: '',
    salary: '',
    role: ''
  })}} className='w-[80px] h-[40px] bg-white flex items-center justify-center rounded hover:bg-slate-400'>Proceed</button>
                </div>   
</div>


    <div className='relative bg-slate-400 w-[95%] h-[80vh] rounded-2xl flex items-center justify-center flex-col gap-[50px] '>
 
<button onClick={()=>{setselectedperson(null);setpersontoedit({
    img: '',
    name: '',
    title: '',
    age: '',
    salary: '',
    role: ''
  });}} className='absolute top-2 right-4 w-[30px] h-[30px] rounded-full bg-slate-300 flex items-center justify-center hover:bg-slate-500'>
    X
</button>
<div className='flex flex-col gap-[50px] items-center justify-center'>
  <div className='flex items-center justify-center flex-col gap-[20px]'>
  <div className='min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-slate-500 flex items-center justify-center rounded-full bg-cover' style={{backgroundImage: persontoedit.img ? `url(${persontoedit.img})` : ( selectedperson ? `url(${selectedperson.img})` : '')}}>
  <input type='file' accept='image/*' onChange={handleImageChange} multiple={false} className='w-[89px] h-[29px] bg-white flex items-center justify-center rounded hover:bg-slate-300'></input>
  </div>

               <input name='name' value={persontoedit.name} onChange={handleinputchange} className='rounded' placeholder={selectedperson ? `name : ${selectedperson.name}` : 'employee title'}></input>    
                 
  </div>
       <div className='flex items-center justify-center gap-[80px]'>
  
  
  <div className='flex flex-col gap-[20px]'>
  <input name='title' value={persontoedit.title} onChange={handleinputchange} className='rounded' placeholder={selectedperson ? `title : ${selectedperson.title}` : 'employee title'}></input>
  <input name='age' value={persontoedit.age} onChange={handleinputchange} type="number" className='rounded' placeholder={selectedperson ? `age : ${selectedperson.age}` : 'employee age'}></input>
  </div>
  
  
  <div className='flex flex-col gap-[20px]'>
  <input name='role' value={persontoedit.role} onChange={handleinputchange} className='rounded' placeholder={selectedperson ? `role : ${selectedperson.role}` : 'employee role'}></input>
  <input name='salary' value={persontoedit.salary} onChange={handleinputchange} type="number"  className='rounded' placeholder={selectedperson ? `salary : $  ${selectedperson.salary}` : 'employee salary'}></input>
 
  </div>


       </div>
       <div>
        <button onClick={()=>setshowprocceedmenu(true)}  className='w-[80px] h-[40px] bg-white flex items-center justify-center rounded hover:bg-slate-300'>Submit</button>
       </div>
       </div>
    </div>
    </div>
  
</>

//                              


  );
}
