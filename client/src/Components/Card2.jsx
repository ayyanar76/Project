
import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../store/productSlice'
import { BaggageClaim, CarTaxiFront, IndianRupeeIcon, ShoppingBag, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Card2 = () => {
    const {data,isLoading} = useGetProductsQuery({})
const [product,setProduct] = useState([])

 const navigate = useNavigate()
const fetchProduct = ()=>{
    try {
setProduct(data.items)

    } catch (error) {
      alert(error.message);
      
    }
  }
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct()
  },[data])

 
  return (
    <>
   <div className=" bg-white flex flex-col gap-2  px-2 py-2">
   <h1 className='text-3xl font-semibold '>Top Deals</h1>
    <div className="grid grid-cols-5 place-items-center  gap-6  py-2 ">
    {
      isLoading ? <>
      <h1 className='text-center w-full'>Please Wait</h1>
      </>:<>
       {
       product.map((item,index)=>
            (<div className="bg-gray-200 w-[250px] h-fit rounded px-2 py-2 " key={index} onClick={()=>navigate(`/product/${item._id}`)}> 
        <div className=" h-[300px]    flex flex-col gap-2 mt-2">
                <img src={item.image.url} className='object-contain h-full'/>
                
                <p className=' text-black text-sm'>{item.description}</p>
               <div className="flex ">
                 <div className="flex items-center w-fit px-2 bg-green-900 justify-center gap-1 rounded text-white"><Star className='text-green-100 ' size={10} fill='gray'/>
                <h1 className='text-xs'>4.4</h1>
                </div>
                <h1 className='flex-1  justify-start ml-10 flex'>{item.name}</h1>
               </div>
                <h1 className='flex items-center'> <IndianRupeeIcon size={14}/>{item.price}</h1>
               
            </div>
         </div>)
       )
     }
      </>
    }
    
    
   </div>
 
   </div>
    </>
  )
}

export default Card2