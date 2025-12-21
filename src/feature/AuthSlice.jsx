import { createSlice } from '@reduxjs/toolkit'


  const AuthSlice = createSlice({
    name: "Auth",
    initialState:{
       User: JSON.parse(localStorage.getItem("log user")) || null,
    },
    reducers:{
        setUser:(state , action)=>{
          state.Auth =  action.payload
        },
        removeUser:(state) =>{
          state.Auth = null
            localStorage.removeItem("log user");
        }
    }
})


export  const {setUser, removeUser} = AuthSlice.actions

export default  AuthSlice.reducer