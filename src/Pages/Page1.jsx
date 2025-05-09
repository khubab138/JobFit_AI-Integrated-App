import React from "react";
import Home from "../Components/Sections/Home";
import UploadSection from "../Components/Sections/UploadSection";
import Navbar from "../Components/Navbar/Navbar";

const Page1 = () => {
  return (
    
      <div className="container flex flex-col">
        <Navbar />
        <Home />
        <UploadSection />
      </div>
  );
};

export default Page1;
