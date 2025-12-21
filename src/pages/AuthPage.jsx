import React from 'react'

import { useSelector } from "react-redux";
import Login from '../components/Login';
import Register from '../components/Register';
const AuthPage = () => {
  let {toggle} =   useSelector((state) => state.toggle)
  return (
    <div className='h-screen flex  items-center  justify-center '>
       {
        toggle ?  <Login/> : <Register/>
       }
    </div>
  )
}

export default AuthPage