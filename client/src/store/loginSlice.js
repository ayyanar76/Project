import { createSlice } from "@reduxjs/toolkit"



 const loginSlice = createSlice({
    name:"auth",
    initialState:{user:null,isAuthenticated:false},
    reducers:{
        setcredential:(state,action)=>{
            state.user=action.payload,
            state.isAuthenticated=true
        },
        logout:(state)=>{
            state.user=null,
            state.isAuthenticated=false
        }
    }
 })
export const {setcredential,logout}=loginSlice.actions
 export default loginSlice.reducer