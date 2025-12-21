import { createSlice } from '@reduxjs/toolkit'

  const CartSlice  = createSlice ({
    name: "cart",
    initialState:{
        cart : [],
    },
    reducers :{
        addTocart: (state ,action) =>{
            state.cart.push(action.payload)
        },
        removeTocart:(state) =>{
            state.cart = []
        }
    }
})

export const {addTocart ,removeTocart} = CartSlice.actions;

export default CartSlice.reducer;