import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



export const statusData=Object.freeze({
        IDLE:'idel',
        ERROR:'error',
        LOADING:'loading'
});



const baseUrl='https://api.escuelajs.co/api/v1'

//Redux thunk middleware.....................................
export const fetchProductsAsync=createAsyncThunk(
    'user/products',
    async()=>{
            const res=await fetch(`${baseUrl}/products`);
            const data=await res.json();
            // console.log('Response from Server:',data);
            return data;
    }
);



const productSlice=createSlice({
    name:'products/usersEcom',
    initialState:{
        productsData:[],
        status:statusData.IDLE,
        
    },
    extraReducers:builder=>{
        builder.addCase(fetchProductsAsync.pending,state=>{
            // console.log('Pending State');
            state.status=statusData?.LOADING; 
        })
        .addCase(fetchProductsAsync.fulfilled,(state,action)=>{
            // console.log('FulFilled State:',action.payload);
            state.status=statusData.IDLE;
            state.productsData=action.payload;   
        })
        .addCase(fetchProductsAsync.rejected,state=>{
            // console.log('Rejected State:');
            state.status=statusData?.ERROR;
        })
    }
});

export default productSlice.reducer;