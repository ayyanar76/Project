import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Category from "./Components/Category";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PoserCard from "./Components/PoserCard";
import Poster from "./Components/Poster";
import Home from "./Page/Home";
import CategoryPage from "./category/CategoryPage";
import BuyProduct from "./Components/BuyProduct";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Cart from "./Page/Cart";


function App() {

  return (
    <>
     <div className="w-100% h-100% bg-gray-200">
    
       <Routes>
         
         <Route path="/" element={<Home/>}/>
         <Route path="/category/:category" element={<CategoryPage/>}/>
         <Route path="/product/:id" element={<BuyProduct/>}/>
         <Route path="/user/login" element={<Login/>}/>
         <Route path="/user/register" element={<Register/>}/>
         <Route path="/cart" element={<Cart/>}/>
       </Routes>
     </div>
    </>
  );
}

export default App;
