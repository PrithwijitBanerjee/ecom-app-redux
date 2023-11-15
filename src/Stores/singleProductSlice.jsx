import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const statusData=Object.freeze({

    'IDLE':'idle',
    'LOADING':'loading',
    'ERROR':'error'

});


const baseUrl='https://api.escuelajs.co/api/v1/products';

//Redux Thunk MiddleWare(Action Creator).......................................
export const fetchSingleProductAsync=createAsyncThunk(
    'user/singleProduct',
    async(id)=>{
        const res=await axios.get(`${baseUrl}`);
        const products=res?.data;
        const product=products.find(record=>record?.id===parseInt(id));
        console.log('Single Product Response Server:', product);
        return product;
    }
);


//Reducer...........................
const singleProductSlice=createSlice({
    name:'product/user',
    initialState:{
        product:{},
        status:statusData?.IDLE
    },
    extraReducers:builder=>{
        builder.addCase(fetchSingleProductAsync.pending,state=>{
                console.log('Pending state:');
                state.status=statusData?.LOADING;
        })
        .addCase(fetchSingleProductAsync.fulfilled,(state,action)=>{
                console.log('Fulfilled State:',action.payload);
                state.status=statusData?.IDLE;
                state.product=action.payload;
        })
        .addCase(fetchSingleProductAsync.rejected,state=>{
                console.log('Rejected State:');
                state.status=statusData?.ERROR;
        })
    }
})

export default singleProductSlice.reducer;