import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice';
import singleProductSlice from './singleProductSlice';
import cartSlice from './cartSlice';



export const ecomStore=configureStore({
    reducer:{
        productInfo:productSlice,
        particularProduct:singleProductSlice,
        productsCart:cartSlice
    }
});