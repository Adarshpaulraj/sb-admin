import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
               <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <div className="nav-link">
        <Link to='./Dasboard'>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span style={{color:'white'}}>Dashboard</span>
        </Link>
        </div>
      
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item active">
    <div className="nav-link" >
        <Link to='/create'>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:"white"}}>Create</span>
        </Link>
    </div>
</li>

<li className="nav-item active">
    <div className="nav-link" >
        <Link to='/Edit'>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:"white"}}>Edit</span>
        </Link>
    </div>
</li>
<li className="nav-item active">
    <div className="nav-link" >
        <Link to='/NestedComponents'>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:"white"}}>Nested Example</span>
        </Link>
    </div>
</li>
<li className="nav-item active">
    <div className="nav-link" >
        <Link to='/useref'>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:"white"}}>useref</span>
        </Link>
    </div>
</li>
<li className="nav-item active">
    <div className="nav-link" >
        <Link to='/usereducer'>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:"white"}}>usereducer</span>
        </Link>
    </div>
</li>
 </ul>
  </>
}

export default Sidebar