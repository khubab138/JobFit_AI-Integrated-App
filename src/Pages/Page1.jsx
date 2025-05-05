import React from "react";
import Home from "../Components/Sections/Home";
import Upload from "../Components/Sections/Upload";
import Navbar from "../Components/Navbar/Navbar";

const Page1 = () => {
  return (
    
      <div className="container flex flex-col">
        <Navbar />
        <Home />
        <Upload />
      </div>
  );
};

export default Page1;
