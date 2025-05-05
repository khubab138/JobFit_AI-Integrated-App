import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const EduSec = () => {
  const [form, setForm] = useState({
    education: [""],
  });

  const resumeRef = useRef();

  const handleEducationChange = (index, value) => {
    const updated = [...form.education];
    updated[index] = value;
    setForm({ ...form, education: updated });
  };

  const addEducationField = () => {
    setForm({ ...form, education: [...form.education, ""] });
  };

  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#fff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="flex gap-8 p-8 font-sans">
      {/* Input Section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex-col">
          <h2 className="text-4xl pb-5 font-bold">Education</h2>
          {form.education.map((edu, index) => (
            <div key={index}>
              <textarea
                value={edu}
                name="education"
                placeholder={`Education ${index + 1}`}
                onChange={(e) => handleEducationChange(index, e.target.value)}
                className="p-2 mb-2 text-base w-full border border-gray-300 rounded resize-y h-20"
              />
            </div>
          ))}
          <button
            className="cursor-pointer bg-gray-700 text-white px-4 py-2 mt-2 rounded"
            onClick={addEducationField}
          >
            Add More Education
          </button>
        </div>
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Download PDF
        </button>
      </div>

      {/* Preview Section */}
      <div
        className="flex flex-col justify-evenly p-8 border border-black bg-white max-h-[842px] max-w-[595px] w-full"
        ref={resumeRef}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          borderColor: "#000000",
        }}
      >
        <section className="EDUCATION flex justify m-2 gap-10">
          <h3 className="flex items-center text-xl font-bold w-32">
            Education
          </h3>
          <ul>
            {form.education.map((edu, index) => (
              <li className="mb-2 text-[12px] font-thin" key={index}>
                {edu}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EduSec;
