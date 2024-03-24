import React from 'react'
import Sidebar from '../compnents/sidebar'
import Overview from '../compnents/overview'



export default function Homepage({data,setdata,mainuser,setmainuser}) {
  return (
 <>
     <div className='flex '>
        <Sidebar />
        <Overview data={data} setdata={setdata} mainuser={mainuser} setmainuser={setmainuser}/>
     </div>
 </>
  )
}
