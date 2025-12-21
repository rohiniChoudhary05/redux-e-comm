import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectRouter = ({ children}) => {
  const {User} = useSelector((state)=>(state.Auth))
  if(!User){
    return <Navigate to= "/" />
  }

  return children ;
}

export default ProtectRouter