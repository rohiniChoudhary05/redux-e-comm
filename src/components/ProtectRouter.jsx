import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectRouter = ({ children}) => {
  const {user} = useSelector((state)=>(state.Auth))
    console.log("PUBLIC ROUTER USER =>", user);
  if(!user){
    return <Navigate to= "/"  replace />
  }

  return children ;
}

export default ProtectRouter