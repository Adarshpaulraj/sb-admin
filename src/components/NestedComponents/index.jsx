import React from 'react'
import { useState } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function NestedComponents() {
  let navigate=useNavigate()
  let [page,setPage]=useState(0)
  useEffect(()=>navigate('mobile'),[])
  return   <>
   <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">User create</h1>
        </div>
        <div className="row">
          Nested Components
        </div>
        <div className="container-fluid">

        <ul className='nested'>
          <li className={page==0?"active":""} onClick={()=>{
            setPage(0)
            navigate('mobile')}}>Mobile</li>
          <li className={page==1?"active":""} onClick={()=>{setPage(1),navigate('rate')}}>Rate</li>
          <li className={page==2?"active":""} onClick={()=>{setPage(2),navigate('brand')}}>Brand</li>
        
        </ul>
        <div>
         <Outlet/>
        </div>
        </div>
      </div>
  </>             

}

export default NestedComponents