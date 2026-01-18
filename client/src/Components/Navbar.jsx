import { Button, Input } from "@mui/material";
import { Search, SearchIcon, ShoppingBasket, ShoppingCart, Store, User2Icon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
   const user = useSelector((state)=>state.auth.user);
    const auth = useSelector((state)=>state.auth.isAuthenticated)
  const navigate = useNavigate()

  
  return (
    <>
      <nav className="static left-0 right-0 bg-blue-950 px-4 py-8 h-6  border bottom-2 text-white">
        <div className="w-full h-full flex flex-1 items-center justify-between gap-2">
            {/* left Side* */}
          <div className="flex items-center w-full gap-4">
            <div className="text-2xl font-semibold text-white cursor-pointer" onClick={()=>navigate('/')}>Bazzar</div>
            <div className="flex items-center gap-4 text-black bg-white rounded-xl px-2 py-2 md:w-[600px] lg:w-[800px] ">
             <SearchIcon size={20} />
             <input placeholder="Serach Products" className="bg-transparent w-full outline-none border-none"/>
            </div>
          </div>
          {/* Right SIde */}

          <div className="hidden md:flex w-full cursor-pointer   bottom-1 justify-between items-center">


{
  !auth && <div className="relative group">
  {/* Trigger */}
  <div className="flex items-center gap-2 cursor-pointer">
    <User2Icon size={20} />
    <h1>Login</h1>
  </div>

  {/* Dropdown */}
  <div className="absolute hidden group-hover:block left-0 top-full mt-0 bg-blue-500 rounded-xl shadow-lg">
    <div className="px-4 py-4 flex flex-col gap-2 text-gray-300 whitespace-nowrap text-center">
      <button className="hover:text-white" onClick={()=>navigate('/user/login')}>Login</button>
      <button className="hover:text-white" onClick={()=>navigate('/user/register')}>Register</button>
    </div>
  </div>
</div> 
}

            
           <div className="hidden md:flex  justify-center items-center gap-2" onClick={()=>navigate('/cart')}>
             <ShoppingCart size={20}/>
             <h1>Cart</h1>
           </div>
           <div className="hidden md:flex  justify-center items-center gap-2">
             <Store size={20}/>
             <h1>Become a Seller</h1>
           </div>
         

           {auth &&
           <>
           <div className="w-6 rounded-full aspect-square bg-white text-blue-950 flex text-center justify-center items-center">
             {user.name[0]}
           </div>
           </>
           
           }
         
         {/* Mobile* */}
        {/* {
            ///
        }
              */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
