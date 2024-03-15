import React from 'react'
import Sidebar from '../compnents/sidebar'
import Overview from '../compnents/overview'



export default function Homepage() {
  return (
 <>
     <div className='flex '>
        <Sidebar />
        <Overview />
     </div>
 </>
  )
}
