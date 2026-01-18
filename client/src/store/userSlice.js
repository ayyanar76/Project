import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath:"User",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASE_URL,
        credentials:"include"
    }),
    endpoints:(builder)=>({
     login:builder.mutation({
       query:({email,password})=>({
            url:"/user/login",
            method:"POST",
            body:{email,password}
       })
     }),
     register:builder.mutation({
         query:({name,email,password})=>({
            url:"/users/register",
            method:"POST",
            body:{name,email,password}
       })
     }),
     details:builder.query({
          query:()=> "/user"
     })
    })
})

export const {useLoginMutation,useRegisterMutation} = userApi;
export const { useDetailsQuery } = userApi;