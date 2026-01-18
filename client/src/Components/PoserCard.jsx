import React from 'react'
import { BaggageClaim, CarTaxiFront, IndianRupeeIcon, ShoppingBag, Star } from 'lucide-react'
const PoserCard = () => {
  return (
   <>
   
<div className="grid grid-cols-5 grid-rows-2 gap-4 bg-white place-items-center py-2 px-2">
    <div >
            <div className="bg-gray-200 w-[250px] h-fit rounded px-2 py-2 "> 
                <div className=" h-[300px] flex flex-col gap-2 mt-2">
                        <img src={'OIP.jpeg'} className='object-contain h-full'/>
                        <p className=' text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipi</p>
                        <div className="flex items-center w-fit px-2 bg-green-900 justify-center gap-1 rounded text-white"><Star className='text-green-100 ' size={10} fill='gray'/>
                        <h1 className='text-xs'>4.4</h1>
                        </div>
                        <h1 className='flex items-center'> <IndianRupeeIcon size={14}/>20000</h1>
                       
                    </div>
                 </div>
    </div>
    <div className="col-start-1 row-start-2">
            <div className="bg-gray-200 w-[250px] h-fit rounded px-2 py-2 "> 
                <div className=" h-[300px] flex flex-col gap-2 mt-2">
                        <img src={'OIP.jpeg'} className='object-contain h-full'/>
                        <p className=' text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipi</p>
                        <div className="flex items-center w-fit px-2 bg-green-900 justify-center gap-1 rounded text-white"><Star className='text-green-100 ' size={10} fill='gray'/>
                        <h1 className='text-xs'>4.4</h1>
                        </div>
                        <h1 className='flex items-center'> <IndianRupeeIcon size={14}/>20000</h1>
                       
                    </div>
                 </div>
    </div>
    <div className="col-start-2 row-start-1">
            <div className="bg-gray-200 w-[250px] h-fit rounded px-2 py-2 "> 
                <div className=" h-[300px] flex flex-col gap-2 mt-2">
                        <img src={'OIP.jpeg'} className='object-contain h-full'/>
                        <p className=' text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipi</p>
                        <div className="flex items-center w-fit px-2 bg-green-900 justify-center gap-1 rounded text-white"><Star className='text-green-100 ' size={10} fill='gray'/>
                        <h1 className='text-xs'>4.4</h1>
                        </div>
                        <h1 className='flex items-center'> <IndianRupeeIcon size={14}/>20000</h1>
                       
                    </div>
                 </div>
    </div>
    <div className="col-start-2 row-start-2">
            <div className="bg-gray-200 w-[250px] h-fit rounded px-2 py-2 "> 
                <div className=" h-[300px] flex flex-col gap-2 mt-2">
                        <img src={'OIP.jpeg'} className='object-contain h-full'/>
                        <p className=' text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipi</p>
                        <div className="flex items-center w-fit px-2 bg-green-900 justify-center gap-1 rounded text-white"><Star className='text-green-100 ' size={10} fill='gray'/>
                        <h1 className='text-xs'>4.4</h1>
                        </div>
                        <h1 className='flex items-center'> <IndianRupeeIcon size={14}/>20000</h1>
                       
                    </div>
                 </div>
    </div>
    <div className="col-span-3 row-span-2 col-start-3 row-start-1 w-full h-full">
       <div className='h-full w-full' >
         <img src={'iphone.png'} className='w-full h-full object-cover'/>
       </div>
    </div>
</div>
    
   </>
  )
}

export default PoserCard