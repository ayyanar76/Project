import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductApi = createApi({
    reducerPath:"AddproductApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASE_URL
    }),
    endpoints:(builder)=>({
        addProduct:builder.mutation({
            query:(formdata)=>({
                url:"/products/upload",
                method:"POST",
                body:formdata
                
            })
        })
    })
}) 

export const {useAddProductMutation} = ProductApi;