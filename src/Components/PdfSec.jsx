import React, { useState } from "react";

const PDFDropZone = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setError("");
    } else {
      setError("Only PDF files are allowed.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100px] lg:min-h-[200px] border-2 border-dashed border-gray-400 rounded-xl p-4">
      <div
        className="w-full h-40 flex items-center justify-center text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {pdfFile ? (
          <p className="text-green-700 font-semibold">{pdfFile.name}</p>
        ) : (
          <p className="text-gray-500">Drag & drop a PDF file here</p>
        )}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PDFDropZone;
