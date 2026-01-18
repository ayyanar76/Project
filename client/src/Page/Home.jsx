import Card2 from '../Components/Card2'
import Card1 from '../Components/Card1'
import Category from '../Components/Category'
import Poster from '../Components/Poster'
import React from 'react'
import PoserCard from '../Components/PoserCard'
import CTA from '../Components/CTA'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useDetailsQuery } from '../store/userSlice'
import { useDispatch } from 'react-redux'
import { setcredential } from '../store/loginSlice'




const Home = () => {
  const dispatch = useDispatch()
   const {data} = useDetailsQuery();
  if(data){
    dispatch(setcredential(data.customer))
  }
  return (
   <>
   <Navbar />
   <div className=" px-2 py-2 gap-2 flex flex-col">
    
         <Category/>
         <Poster/>
         <Card1/>
         <Card2/>
         <PoserCard/>
        <Card2/>
      </div>
      
       <CTA/>
       <Footer/>
      
   </>
  )
}

export default Home