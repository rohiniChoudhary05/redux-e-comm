import { createSlice } from '@reduxjs/toolkit'


  const AuthSlice = createSlice({
    name: "Auth",
    initialState:{
       user: JSON.parse(localStorage.getItem("log user")) || null,
    },
    reducers:{
        setUser:(state , action)=>{
          state.user =  action.payload
        },
        removeUser:(state) =>{
          state.user = null
            localStorage.removeItem("log user");
        }
    }
})


export  const {setUser, removeUser} = AuthSlice.actions

export default  AuthSlice.reducer