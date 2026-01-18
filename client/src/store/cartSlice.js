import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const cartApi = createApi({
    reducerPath:"cart",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASE_URL,
        credentials:"include"
    }),
    endpoints:(builder)=>({
        addtoCart : builder.mutation({
            query:(id)=>({
                url:`/addcart/${id}`,
                method:"POST"
            })
       
        }),
         removeFromCart:builder.mutation({
            query:(id)=>({
               url :`/remove/${id}`,
               method:"DELETE"
                
            })
        })
    })
})

export const {useAddtoCartMutation,useRemoveFromCartMutation } = cartApi
export default cartApi;