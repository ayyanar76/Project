import { setcredential } from '../store/loginSlice'
import { useDetailsQuery, useLoginMutation } from '../store/userSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState(null)
    const [password,setpassword] = useState(null)
    const [login,{isLoading}] = useLoginMutation();
    const {data} = useDetailsQuery();
   const dispatch = useDispatch()
   

 useEffect(()=>{},[])
  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ WAIT for API
       await login({ email,password}).unwrap();

      // ✅ Save user in redux
      
        
       dispatch(setcredential(data))
      
   
      // ✅ Navigate after success
       navigate("/");

    } catch (error) {
      alert(error?.data?.message || "Login failed");
    }
  };
  return (
    
       <main className="flex items-center justify-center w-full px-4 h-screen">
            <form className="flex w-full flex-col max-w-96" onSubmit={handlelogin}>
        
               <Link to={'/'}>
               <h1 className='text-3xl font-bold text-center '>Bazzar</h1>
               </Link>
        
                <h2 className="text-xl font-medium text-gray-900">Sign in</h2>
        
                <p className="mt-4 text-base text-gray-500/90">
                    Please enter email and password to access.
                </p>
        
                <div className="mt-10">
                    <label className="font-medium">Email</label>
                    <input
                        placeholder="Please enter your email"
                        className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                        required
                        type="email"
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
        
                <div className="mt-6">
                    <label className="font-medium">Password</label>
                    <input
                        placeholder="Please enter your password"
                        className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                        required
                        type="password"
                        name="password"
                         onChange={(e)=>setpassword(e.target.value)}
                    />
                </div>
        
                <button
                    type="submit"
                    className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
                >
                  {isLoading ? <><div className="w-full flex justify-center "><div className="w-6 aspect-square rounded-full border-dashed  border-white border-2 animate-spin"></div></div></>:"Login"}
                </button>
                <p className='text-center py-8 '>
                    Don't have an account? <a onClick={()=>navigate('/user/register')} className="text-indigo-600 hover:underline">Sign up</a>
                </p>
            </form>
        </main>

  )
}

export default Login