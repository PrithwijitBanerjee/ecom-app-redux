import {  createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:'product/user',
    initialState:{
        cartProducts:[],
    },
    reducers:{
        addCart:(state,action)=>{
                state.cartProducts.push(action.payload);
        },
        removeCart:(state,action)=>{
            return state.cartProducts.filter(item=>item?.id!==action.payload);
        }
    }
});

export const {addCart,removeCart}=cartSlice.actions;
export default cartSlice.reducer;