import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const Category = () => {

const navigate = useNavigate()

  return (
    <div className=' w-full bg-white px-2 py-2 h-[100px] flex justify-center'>
  <div className="flex w-full justify-around ">
   <div className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>navigate('/category/Mobile')}>
  <img src='iphone.png' width={40} height={30}/>
  <button className=''>Mobiles & Accessories</button>
   </div>
   <div className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>navigate('/category/Fashions')}>
   <img src='fashion.png' width={40} height={30}/>
  <button className=''>Fashions</button>
   </div>
   <div className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>navigate('/category/Electronics')}>
  <img src='Electroncis.png' width={40} height={30}/>
  <button className=''>Electronics</button>
   </div>
   <div className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>navigate('/category/Personal')}>
     <img src='beauty.png' width={40} height={30}/>
  <button className=''>beauty & personalcares</button>
   </div>
   <div className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>navigate('/category/Grociery')}>
  <img src='grocery.png' width={40} height={30}/>
  <button className=''>Grociers</button>
   </div>
  </div>
    </div>
  )
}

export default Category