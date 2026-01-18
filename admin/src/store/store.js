import { configureStore } from "@reduxjs/toolkit"
import {ProductApi} from './AddProductApi.js'


const store = configureStore({
    reducer:{
       [ProductApi.reducerPath]:ProductApi.reducer
    },
 middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(ProductApi.middleware)
 }
}
)

export default store