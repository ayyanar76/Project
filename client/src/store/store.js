import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "./productSlice"
import { userApi } from "./userSlice"
import authReducer from './loginSlice.js'
import cartApi from "./cartSlice"


const store = configureStore({
 reducer:{
    [productApi.reducerPath]:productApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [cartApi.reducerPath]:cartApi.reducer,
    auth:authReducer

 },
 middleware:(getDefaultMiddleware)=>{
   return  getDefaultMiddleware().concat(productApi.middleware,userApi.middleware,cartApi.middleware)
 }
})

export default store