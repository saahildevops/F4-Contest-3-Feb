import React from 'react';
import Search from './Search';

const Navbar = () => {
  return (
    <div className="navbar-bg">
    <div className="container">
    <div className='navbar-container'>
      <div style={{borderBlockEnd:'1px solid #ccc', width:'100%', marginBlockEnd:'10px', padding:'5px'}}>
         <h3 className='loading' style={{color:'#ccc'}}>Movies App</h3>
      </div>
    </div>
    
    <Search/>
    </div>
    </div>
  )
}


export default Navbar;
