import React from 'react'
import Sidebar from '../compnents/sidebar'
import { useEffect, useState } from 'react'
import Userinputoverview from '../compnents/userinputoverview'
export default function Userinput({data,setdata}) {
  return (
    <div className='flex '>
    <Sidebar />
<Userinputoverview data={data} setdata={setdata} />
    </div>
  )
}
