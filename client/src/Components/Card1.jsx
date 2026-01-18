import React from 'react'

const Card1 = () => {
  return (
    <>
    <div className=" w-full flex justify-between gap-2">
       <div className="flex w-full   gap-2 justify-around">
        <div className="bg-white  w-[300px] px-2 py-2 rounded">
            <div className=" h-[300px]">
                <img src={'OIP.jpeg'} className='object-fill h-full'/>
            </div>
        </div>
     <div className="bg-white  w-[300px] px-2 py-2 rounded">
            <div className=" h-[300px]">
                <img src={'OIP.jpeg'} className='object-fill h-full'/>
            </div>
        </div>
       </div>
       <div className="w-full bg-white px-2 py-2 rounded">
       <div className=" h-[300px]">
         <img src={'OIP.jpeg'} className='object-fill h-full'/>
       </div>
        </div>
    </div>
    </>
  )
}

export default Card1