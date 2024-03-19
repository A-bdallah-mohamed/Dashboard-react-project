import React from 'react'
import Sidebar from '../compnents/sidebar'
import MemberlandOVERVIEW from '../compnents/memberlandOVERVIEW'
import Adjustabletable from '../compnents/adjustabletable'
import Adminifyoverview from '../compnents/Adminifyoverview'


export default function Adminify({selectedperson ,setselectedperson}) {
  return (
    <>
    <div className='flex'>

 <Sidebar />
<Adminifyoverview selectedperson={selectedperson} setselectedperson={setselectedperson} />
 </div>
  </>
  )
}
