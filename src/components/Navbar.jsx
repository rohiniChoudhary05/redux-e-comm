import React from 'react'
import { NavLink} from 'react-router'

const Navbar = () => {
  return (
    <div className=' flex  items-center justify-between p-3'>
       <h2>Logo</h2>
       <div className=' flex  gap-5'>
         <NavLink to="/home">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
       </div>
        <div className=' flex gap-5'>
            <p>Profile</p>
            <p>Cart</p>
        </div>
      
    </div>
  )
}

export default Navbar