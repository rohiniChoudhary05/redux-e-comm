import React from 'react'
import { Routes, Route } from "react-router";
import AuthPage from '../pages/AuthPage';
import Home from '../pages/Home';
import Users from '../pages/Users';
import ProtectRouter from '../components/ProtectRouter';
import PublicRouter from '../components/PublicRouter';

const AppRouter = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<PublicRouter>
      <AuthPage/>
    </PublicRouter>}  />
    <Route  path='/home' element={<ProtectRouter> <Home/></ProtectRouter>}/>
    <Route path='/users' element={<ProtectRouter>
      <Users/>
    </ProtectRouter>}/>
   </Routes>
    </div>
  )
}

export default AppRouter