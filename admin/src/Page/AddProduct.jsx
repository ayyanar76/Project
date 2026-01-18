import React, { useState } from "react";
import { useAddProductMutation } from "../store/AddProductApi";

const AddProduct = () => {
  const [AddProduct, { isLoading }] = useAddProductMutation();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState();
  const [product,setproduct] = useState()
  const [description,setDescription] = useState()
  const [price,setPrice] = useState()
  const [category,setCategory] = useState()
console.log(price);


 const data = new FormData()
 data.append("name",product)
 data.append("price",price)
 data.append("image",image)
 data.append("category",category)
 data.append("description",description)

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setImage(file);
  setPreview(URL.createObjectURL(file));

};

 const AddItem = async(e)=>{
  try {
     e.preventDefault();
     await AddProduct(data).unwrap()
     alert("Sucess")
  } catch (error) {
    console.log(error)
  }
 }
 console.log(isLoading);
 

  return (
    <div className="w-screen h-screen flex justify-center items-center">
    
        <>
          <div className="py-10 flex flex-col justify-between bg-white">
        <form className="md:p-10 p-4 space-y-5 max-w-lg w-6xl" onSubmit={AddItem}>
          <div>
            <p className="text-base font-medium text-center">Product Image</p>
            <div className="flex flex-wrap items-center justify-center  gap-3 mt-2">
              {Array(1)
                .fill("")
                .map((_, index) => (
                  <label key={index} htmlFor={`image${index}`}>
                    <input
                      accept="image/*"
                      type="file"
                      id={`image${index}`}
                      hidden
                      onChange={(e) => handleImageChange(e, index)}
                    />
                    <img
                      className="max-w-24 cursor-pointer"
                      src={
                        preview ||
                        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                      }
                      alt="uploadArea"
                      width={100}
                      height={100}
                    />
                  </label>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <label className="text-base font-medium" htmlFor="product-name">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              placeholder="Type here"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
              onChange={(e)=>setproduct(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <label
              className="text-base font-medium"
              htmlFor="product-description"
            >
              Product Description
            </label>
            <textarea
              id="product-description"
              rows={4}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
              placeholder="Type here"
                onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e)=>setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {[
                { name: "Electronics" },
                { name: "Fashions" },
                {name : "Mobiles"},
                {name:"Grociery"},
                {name:"Personal"}
              ].map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex-1 flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="product-price">
                Product Price
              </label>
              <input
                id="product-price"
                type="number"
                placeholder="0"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                required
                  onChange={(e)=>setPrice(e.target.value)}
              />
            </div>
           
          </div>
          <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded" type="submit">
            ADD
          </button>
        </form>
      </div>
        </>
    
    </div>
  );
};

export default AddProduct;
