import { configureStore } from '@reduxjs/toolkit'
import AuthSlice  from '../feature/AuthSlice'
import   CartSlice  from '../feature/CartSlice'
import  ToggleSlice  from '../feature/ToggleSlice'
 export const store = configureStore({
    reducer:{
        Auth : AuthSlice,
        Cart : CartSlice,
        toggle: ToggleSlice
    }
})