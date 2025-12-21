import { createSlice } from '@reduxjs/toolkit'

const ToggleSlice = createSlice({
    name:"toggle",
    initialState:{
        toggle: false
    },
    reducers:{
     setToogle:(state, action) =>{
        state.toggle = action.payload
     }
    }
})


export  const {setToogle}  = ToggleSlice.actions

export default ToggleSlice.reducer