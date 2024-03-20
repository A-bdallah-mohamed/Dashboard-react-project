import React, { useEffect } from 'react'
import {useState } from 'react'

export default function Editableperson({selectedperson,setselectedperson, data , setdata}) {

  const [persontoedit,setpersontoedit] = useState({
    img: '',
    name: '',
    title: '',
    age: '',
    salary: '',
    role: ''
  });
  

useEffect(()=> {
console.log(persontoedit)

},[persontoedit])



  const handleinputchange = (event) => {
    const {name,value} = event.target
    setpersontoedit({...persontoedit,[name]: value})
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {

setpersontoedit({...persontoedit, img: reader.result});

      };
      reader.readAsDataURL(file);
    }
  };
  
  const editperson = (person) => {
    const indexofeditperson = data.indexOf(person)
    if (indexofeditperson !== -1){
  data.splice(indexofeditperson,1,persontoedit)
    }
  }
  return (
  
    

<>
    <div className={selectedperson ? 'w-full h-full flex absolute items-center justify-center z-50 transition-all duration-500 ease-in-out' : 'ml-[50%] w-[1px] h-[1px] flex absolute items-center justify-center z-50 overflow-hidden opacity-0 pointer-events-none transition-all duration-500 ease-in-out'} >

    <div className='relative bg-slate-400 w-[90%] h-[80vh] rounded-2xl flex items-center justify-center flex-col gap-[50px] font-semibold font-roboto-condensed'>

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
  <input onChange={handleImageChange} type='file' accept='image/*'  multiple={false} className='w-[89px] h-[29px] bg-white flex items-center justify-center rounded hover:bg-slate-300'></input>
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
        <button onClick={()=>{editperson(selectedperson);setselectedperson(null)}}  className='w-[80px] h-[40px] bg-white flex items-center justify-center rounded hover:bg-slate-300'>Submit</button>
       </div>
       </div>
    </div>
    </div>
  
</>





  );
}
