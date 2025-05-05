import React from "react";
import Carousel from "../Carousel";
import PDFDropZone from "../PdfSec";

const SlideSection = () => {

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      console.log("PDF uploaded:", file.name);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };
  

  return ( <section id="upload" >
    <div className=" m-3 h-screen w-full container flex flex-col  ">
      <div className="lg:flex lg:flex-wrap felx lg:translate-x-10">
        <div className="m-4 lg:w-150 lg:h-130  w-45 h-65 max-w-4xl">
          <div className="m-2 p-2 flex flex-col ">
            <h1 className="lg:text-8xl flex flex-col ">
              Drop your Resume here <span className="lg:text-xl text-red-600" >must be in pdf</span>
            </h1>
            <input type="file" accept="application/pdf" onChange={(e) => handleFileUpload(e)} />

            <div>
              <PDFDropZone className="hidden "/>
            </div>
                      </div>
        </div>
        <Carousel />
      </div>
    </div>
    </section>  );
};

export default SlideSection;
