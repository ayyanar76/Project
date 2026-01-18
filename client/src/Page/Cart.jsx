import { useNavigate } from 'react-router-dom'
import { useDetailsQuery } from '../store/userSlice'
import {  X } from 'lucide-react'
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setcredential } from '../store/loginSlice'
import { useRemoveFromCartMutation } from '../store/cartSlice'

const Cart = () => {
    useEffect(()=>{},[])
       
      const auth = useSelector((state)=>state.auth.isAuthenticated)
      const dispatch = useDispatch()
      const [remove,{isLoading}] = useRemoveFromCartMutation();

     const {data:cartdata} = useDetailsQuery()
     if(cartdata){
         dispatch(setcredential(cartdata.customer))
       }
   const [showAddress, setShowAddress] = React.useState(false)
  const [address,setAddress] = useState([]) 
 const [addessForm,setAddressForm] = useState(false)
 const [door,setdoor] = useState(null)
 const [city,setCity] = useState(null)
 const [state,setState] = useState(null)
 const [current,setCurrent] = useState([])
 const submitAddress =(e)=>{
    e.preventDefault();
     setAddress([...address, ` ${door}, ${city}, ${state}`])
     setAddressForm(false)

 }

 const navigate = useNavigate()
const  cart =cartdata?.cart.items
console.log(cart);
const subtotal = cart.reduce((total, item) => {
  return total + item.product.price * item.quantity;
}, 0);


const total = subtotal
console.log( cart)

const del = async(id)=>{
try {
  await remove(id).unwrap()
  alert("item removed")
} catch (error) {
    alert(error)
}
}


 useEffect(()=>{},[])
  return (
  <>

 {
    auth ? <>
      {
    addessForm && (
      <>
     <div className="fixed z-10 bg-opacity-50 bg-black w-full h-screen justify-center flex items-center">
        <form className="bg-white text-gray-500 max-w-[340px] mx-4 p-6 text-left text-sm rounded-lg border border-gray-300/60 relative" onSubmit={submitAddress}>
        <X  className='absolute right-5 mt-[-8px] cursor-pointer' onClick={()=>setAddressForm(false)}/>
           <label className="font-medium" >Door No</label>
           <input className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter Door no" required onChange={(e)=>setdoor(e.target.value)}/>
            <label className="font-medium" >City</label>
            <input className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter City" required  onChange={(e)=>setCity(e.target.value)}/>
            <label className="font-medium" >State</label>
           <input  className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter State" required onChange={(e)=>setState(e.target.value)} />
            <div className="flex items-center justify-center">
                <button type="submit" className="my-3 bg-indigo-500 py-2 px-5 rounded text-white font-medium">Save</button>
            </div>
        </form>
     </div>
      </>
    )
   }


  
     <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full h-screen px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-indigo-500"> Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

              
             {cart.length === 0 ? (
  <h1 className="text-center text-gray-500">No Items In Cart</h1>
) : (
  cart?.map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
    >
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 border rounded overflow-hidden">
          <img
            src={item.product.image.url}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold">{item.product.name}</p>
          <p className="text-sm text-gray-500">
            Qty: {item.quantity}
          </p>
        </div>
      </div>

      <p className="text-center">
        ₹{item.product.price }
      </p>

      {
        isLoading ?<div className="w-6 aspect-square rounded-full border-dashed  border-red-800 border-2 animate-spin"></div>:<><button className="text-red-500 cursor-pointer" onClick={()=>del(item.product._id)}>
        Remove
      </button></>
      }
    </div>
  ))
)} 


                <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium" onClick={()=>navigate('/')}>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{current.length == 0 ? "No Items Found " : current} </p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                               {
                                address.map((address,index)=>(
                                  <div className="flex justify-between items-center px-2" key={index} >
                                     <p onClick={() => {setShowAddress(false); setCurrent(address)}} className="text-gray-500 p-2 hover:bg-gray-100" >
                                  { address}
                                </p>
                                <X size={16} className='text-gray' onClick={()=>  setAddress(address.filter((_, i) => i !== index))}/>
                                  </div>
                                ))
                               }
                                <p onClick={() => setAddressForm(true)} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>$20</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>$20</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span> {total}+$20</span>
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
                    Place Order
                </button>
            </div>
        </div>
    </> :<>
    <div className="flex h-screen justify-center items-center">
   
      <div className="">  <button>Please Wait</button></div>
    </div>
    </>
 }
    </>
   
 
  )
}

export default Cart