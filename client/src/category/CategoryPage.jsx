import React from "react";
import { useGetProductsQuery } from "../store/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { IndianRupeeIcon, Star } from "lucide-react";
import Navbar from "../Components/Navbar";

const CategoryPage = () => {
  const { category } = useParams(); // category or search value
   console.log(category);
   const navigate = useNavigate()
  // ✅ send correct key to API
  const { data, isLoading, isError } = useGetProductsQuery({
    category:category,
  });

  if (isLoading) {
    return <h1 className="text-center">Please wait...</h1>;
  }

  if (isError) {
    return <h1>Error loading products</h1>;
  }

  return (
    <>
     <Navbar/>
     <div className="bg-white flex flex-col gap-2 px-2 py-2">
      <h1 className="text-3xl font-semibold">Top Deals</h1>

      <div className="grid grid-cols-5 place-items-center gap-6 py-2">
        {data?.items?.map((item) => (
          <div
            className="bg-gray-200 w-[250px] h-fit rounded px-2 py-2"
            key={item._id} onClick={()=>navigate(`/product/${item._id}`)}
          >
            <div className="h-[300px] flex flex-col gap-2 mt-2">
              <img
                src={item.image.url}
                className="object-contain h-full"
                alt={item.name}
              />

              <p className="text-black text-sm">
                {item.description}
              </p>

              <div className="flex">
                <div className="flex items-center w-fit px-2 bg-green-900 gap-1 rounded text-white">
                  <Star size={10} fill="gray" />
                  <h1 className="text-xs">4.4</h1>
                </div>

                <h1 className="flex-1 ml-10">
                  {item.name}
                </h1>
              </div>

              <h1 className="flex items-center">
                <IndianRupeeIcon size={14} />
                {item.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  
  );
};

export default CategoryPage;
