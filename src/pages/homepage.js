import React from 'react'
import Sidebar from '../compnents/sidebar'
import Overview from '../compnents/overview'



export default function Homepage({data,setdata}) {
  return (
 <>
     <div className='flex '>
        <Sidebar />
        <Overview data={data} setdata={setdata}/>
     </div>
 </>
  )
}
