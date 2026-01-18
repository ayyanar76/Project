
import { Button } from '@mui/material';
import { useGetProductByIdQuery } from '../store/productSlice';

import { useParams } from 'react-router-dom';
import Card2 from './Card2';
import Navbar from './Navbar';

import { useAddtoCartMutation } from '../store/cartSlice';

const BuyProduct = () => {
 const { id } = useParams();
 const [cart,{isLoading:load}] = useAddtoCartMutation();
 
//   const {} = ();

  const { data, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <h1 className="text-center">Please wait...</h1>;
  }

  if (isError) {
    return <h1>Error loading product</h1>;
  }

  // 🔥 product comes directly from API
  const product = data?.items; // IMPORTANT

  const addTocart = async(id)=>{
    try {
     
       const res =  await cart(id).unwrap()
         alert(res.message)
    } catch (error) {
        alert(error.message)
    }
  }

  
  return (
    <>
     <Navbar/>
    <div className="max-w-6xl w-full px-6 py-6">
            <p>
                <span>Home</span> /
                <span> Products</span> /
                <span> {product.category}</span> /
                <span className="text-indigo-500"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                   

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={product.image.url} width={300} height={300} alt="Selected product" className=" w-full h-full object-fit" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                  

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                        <p className="text-2xl font-medium">MRP: ${product.price - 1000}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <p>{product.description ? product.description :"Nice Product"}</p>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full flex justify-around py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" onClick={()=>addTocart(product._id)}>
                          {load && <div className="w-6 aspect-square rounded-full border-dashed  border-white border-2 animate-spin"></div>}  Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition" >
                            Buy now
                        </button>
                    </div>
                    {
                        product.stock < 10 && <div className="mt-2 text-red-600" >
                      <h1> Few Products are Left:{product.stock}</h1>
                    </div>
                    }
                </div>
            </div>
        </div>
        <Card2 />
    </>
  )
}

export default BuyProduct