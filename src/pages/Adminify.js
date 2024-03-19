import React from 'react'
import Sidebar from '../compnents/sidebar'
import MemberlandOVERVIEW from '../compnents/memberlandOVERVIEW'
import Adjustabletable from '../compnents/adjustabletable'
import Adminifyoverview from '../compnents/Adminifyoverview'
import { useEffect, useState } from 'react'

export default function Adminify({selectedperson ,setselectedperson,data,setdata}) {

  return (
    <>
    <div className='flex'>

 <Sidebar />
<Adminifyoverview selectedperson={selectedperson} setselectedperson={setselectedperson} data={data} setdata={setdata}/>
 </div>
  </>
  )
}
