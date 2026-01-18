import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({ 
        baseUrl:import.meta.env.VITE_BASE_URL
    }),
    tagTypes:['product'],  
    endpoints:(builder)=>({
       getProducts: builder.query({
      query: ({category,search}) => {
        let url = '/products'
        let params= [];
         if (category !== undefined) params.push(`category=${category}`);
        if(search !== undefined) params.push(`search=${search}`)
        
        if(params.length>0){
          url += `?${params.join("&")}`
        }
        return url;
      },
      providesTags: ["Product"],
    }),
    // GET single product
    getProductById : builder.query({
      query: (id) => `/product/${id}`,
    }),
    })
})

export const {useGetProductsQuery,useGetProductByIdQuery} = productApi