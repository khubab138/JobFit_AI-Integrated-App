import React from "react";
import Carousel from "../Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPdfFile } from "../../Redux/PdfSlice";

const UploadSection = () => {
  const dispatch = useDispatch();
  const { pdfFile, error } = useSelector((state) => state.pdf);

  const validation = (file) => {
    if(!file) return
    console.log(file.name)
    if (file && file.type === "application/pdf") {
      dispatch(setPdfFile(file));
      dispatch(setError(''))
    } else {
      dispatch(setError("Only PDF Files Allowed,"));
      alert("please Upload a Valid Pdf File");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    validation(file);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; 
    if(file){
      validation(file)
    }
  };

  const handleDragOver = (e) => {
     e.preventDefault();
  };

  return (
    <section id="upload">
      <div className=" m-3 h-screen w-full container flex flex-col  ">
        <div className="lg:flex lg:flex-wrap felx lg:translate-x-10">
          <div className="m-4 lg:w-150 lg:h-130  w-45 h-65 max-w-4xl">
            <div className="m-2 p-2 flex flex-col ">
              <h1 className="lg:text-8xl flex flex-col ">
                Drop your Resume here{" "}
                <span className="lg:text-3xl text-red-600">must be in pdf</span>
              </h1>
              <input
                className="cursor-pointer"
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileUpload(e)}
              />

              <div className="flex flex-col items-center justify-center h-[100px] lg:min-h-[200px] border-2 border-dashed border-gray-400 rounded-xl p-4">
                <div
                  className="w-full h-40 flex items-center justify-center text-center cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {pdfFile ? (
                    <p className="text-green-700 font-semibold">
                      {pdfFile.name}
                    </p>
                  ) : (
                    <p className="text-gray-500">Drag & drop a PDF file here</p>
                  )}
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
