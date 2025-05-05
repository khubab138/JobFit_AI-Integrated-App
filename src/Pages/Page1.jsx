import React from 'react'
import Hero from '../Components/hero/Hero'
import SlideSection from "../Components/SlideSecton/SlideSection" 
import Navbar from "../Components/Navbar/Navbar"


const Page1 = () => {
  return (
    <div className="container flex flex-col">
    <Navbar />
    <Hero />
    <SlideSection/>
   


  </div>
  )
}

export default Page1