import React from 'react'
import Sidebar from '../compnents/sidebar'
import MemberlandOVERVIEW from '../compnents/memberlandOVERVIEW'

export default function Memberland({selectedperson ,setselectedperson}) {


  return (
    <div className='flex '>
 <Sidebar />
 <MemberlandOVERVIEW selectedperson={selectedperson} setselectedperson={setselectedperson} />
 </div>
  )
}
