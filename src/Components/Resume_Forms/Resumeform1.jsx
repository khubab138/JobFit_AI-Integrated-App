import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { getField } from "../../Redux/AiSlice"
import {
  updateField,
  updateEducation,
  addEducation,
  updateCertificate,
  addCertificate,
  updateExperience,
  addExperience,
  resetForm,
} from "../../Redux/ResumeSlices";
import { BiLogOut } from "react-icons/bi";
import logo from "../../assets/Logo/L.svg"

const ResumeForm1 = () => {
  const isFormValid = () => {
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.address.trim() &&
      form.applyingFor.trim() &&
      form.aboutMe.trim() &&
      form.skills.trim() &&
      form.education.length > 0 &&
      form.education.every((e) => e.heading.trim() && e.description.trim()) &&
      form.experience.length > 0 &&
      form.experience.every((e) => e.exName.trim() && e.exDescription.trim())
    );
  };

  const form = useSelector((state) => state.resume);
  const getAi = useSelector((state) => state.ai);
  const dispatch = useDispatch();
  const resumeRef = useRef();

  const resetFormHandler = () => {
    dispatch(resetForm());
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
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      const cleanName = form.name.trim().replace(/\s+/g, "_") || "resume";
      const fileName = `${cleanName}_.pdf`;
      pdf.save(fileName);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
    //___________FOR AI _____________
    dispatch(getField({ name, value }));
  };
//_____________FOR AI_____________

// const getInputForAi = (e)=>{
// dispatch(getAi({name:e.target.name, value:e.target.value}))
// }

  const handleEduChange = (index, field, value) =>
    dispatch(updateEducation({ index, field, value }));

  const handleCertificateChange = (index, field, value) =>
    dispatch(updateCertificate({ index, field, value }));

  const handleExperienceChange = (index, field, value) =>
    dispatch(updateExperience({ index, field, value }));

  const navLogo = logo;

  return (
    <div className="ltr" dir="ltr">
      <div className="flex">
        <a
          className="flex flex-wrap flex-row justify-between place-items-center "
          href="http://localhost:5173/"
        >
          <img className="h-18" src={navLogo} alt="img od" />
          <span className="text-2xl font-semibold text-white ">jobfit</span>
        </a>
      </div>
      <div className="flex gap-8 p-8 font-sans">
        <div className=" flex-1 flex flex-col gap-4">
          <div className="INTRODUCTION flex-1 gap-4 p-5">
            <h2 className="text-4xl pb-5 font-bold">Introduction</h2>
            <input
              required
              name="name"
              placeholder="Full Name"
              onChange={handleInputChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              required
              name="applyingFor"
              placeholder="applyingFor Or Role of the Job"
              onChange={handleInputChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              required
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              required
              name="phone"
              placeholder="Phone Number"
              onChange={handleInputChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              required
              name="address"
              placeholder="Enter your Recent Address"
              onChange={handleInputChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
          </div>
          <h2 className="text-4xl pb-5 font-bold">Summary</h2>
          <textarea
            required
            name="aboutMe"
            placeholder="About Your-Self Or Summerized"
            maxLength={300}
            onChange={handleInputChange}
            className="p-2 text-base border border-gray-300 rounded resize-y h-20"
          />
          <div className="flex-1  flex-col ">
            <h2 className="text-4xl pb-5  font-bold">Education</h2>
            {form.education.map((edu, index) => (
              <div key={index}>
                <input
                  required
                  value={edu.heading}
                  placeholder={`Degree ${index + 1}`}
                  onChange={(e) =>
                    handleEduChange(index, "heading", e.target.value)
                  }
                  className="p-2 m-2 text-base border border-gray-300 rounded"
                />
                <input
                  required
                  value={edu.description}
                  placeholder={`Institute and Passing Year ${index + 1}`}
                  onChange={(e) =>
                    handleEduChange(index, "description", e.target.value)
                  }
                  className="p-2 mb-2 text-base w-full border border-gray-300 rounded "
                />
              </div>
            ))}
            <button
              className="cursor-pointer bg-gray text-white"
              onClick={() => dispatch(addEducation())}
            >
              Add More Education
            </button>
          </div>

          <div className="flex-1  flex-col ">
            <h2 className="text-4xl pb-5  font-bold">Certificates</h2>
            {form.certificates.map((cer, index) => (
              <div key={index}>
                <input
                  value={cer.CerName}
                  placeholder={`Certificate Name ${index + 1}`}
                  onChange={(e) =>
                    handleCertificateChange(index, "CerName", e.target.value)
                  }
                  className="p-2 m-2 text-base border border-gray-300 rounded"
                />
                <input
                  value={cer.cerDescription}
                  placeholder={`Institute a
                    nd Passing Year ${index + 1}`}
                  onChange={(e) =>
                    handleCertificateChange(
                      index,
                      "cerDescription",
                      e.target.value
                    )
                  }
                  className="p-2 mb-2 text-base w-full border border-gray-300 rounded "
                />
              </div>
            ))}
            <button
              className="cursor-pointer bg-gray text-white"
              onClick={() => dispatch(addCertificate())}
            >
              Add More Certificate
            </button>
          </div>
          <div className="flex-1 flex-col ">
            <h2 className="text-4xl pb-5  font-bold">Skills</h2>
            <textarea
              name="skills"
              placeholder="Skills"
              onChange={handleInputChange}
              className="p-2 w-full text-base border border-gray-300 rounded resize-y h-20"
            />
          </div>
          <div className="flex-1  flex-col ">
            <h2 className="text-4xl pb-5  font-bold">Expirience</h2>
            {form.experience.map((exp, index) => (
              <div key={index}>
                <input
                  value={exp.exName}
                  placeholder={`Compuny or Project ${index + 1}`}
                  onChange={(e) =>
                    handleExperienceChange(index, "exName", e.target.value)
                  }
                  className="p-2 m-2 text-base border border-gray-300 rounded"
                />
                <input
                  value={exp.exDescription}
                  placeholder={`Expirience on work or Project ${index + 1}`}
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      "exDescription",
                      e.target.value
                    )
                  }
                  className="p-2 mb-2 text-base w-full border border-gray-300 rounded "
                />
              </div>
            ))}
            <button
              className="cursor-pointer bg-gray text-white"
              onClick={() => dispatch(addExperience())}
            >
              Add More Field
            </button>
          </div>
          <button
            onClick={ ()=>{
               downloadPDF();
              dispatch(resetForm())
            }}
            disabled={!isFormValid()}
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
              !isFormValid() && "bg-gray-500 hover:bg-red-500 hover:text-white"
            }`}
          >
            {!isFormValid() ? (
              <span className="font-bold">
               Please fill form
              </span>
            ) : (
              <span> Download PDF</span>
            )}
          </button>
        </div>

        <div
          className="flex  flex-col justify-evenly p-8 border border-black bg-white max-h-[842px] max-w-[595px] w-full"
          ref={resumeRef}
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            borderColor: "#000000",
          }}
        >
          <section className="Intro flex justify-between mb-10 ">
            <div className="NamePart ">
              <h1 className="text-3xl font-bold">{form.name}</h1>
              <h1 className="font-thin">{form.applyingFor}</h1>
            </div>
            <div className="ContatcPart">
              <p className="text-[10px]">{form.phone}</p>
              <p className="text-[10px]">{form.address}</p>
              <p className="text-[10px]">{form.email}</p>
            </div>
          </section>
          <hr />
          <section className="AboutSec flex justify m-2 gap-10 ">
            <h3 className="flex justify-center text-xl font-bold mr-6">
              Summary
            </h3>
            <p className="text-[12px] font-thin ">{form.aboutMe}</p>
          </section>
          <hr />
          <section className="EDUCATION flex  m-2 gap-10">
            <div className="flex">
              <h3 className="flex items-center text-xl font-bold mr-15">
                Education
              </h3>
              <ul
                className="flex flex-col text-base text-left list-none pl-0"
                dir="ltr"
                style={{
                  direction: "ltr",
                  textAlign: "left",
                  unicodeBidi: "plaintext",
                }}
              >
                {form.education.map((edu, index) => (
                  <li key={index} className="mb-2 list-none text-left">
                    <div
                      className="text-left"
                      style={{ direction: "ltr", whiteSpace: "pre-wrap" }}
                    >
                      <strong className="block text-[14px]">
                        {edu.heading}
                      </strong>
                      <div className="text-[12px] font-thin">
                        {edu.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr />
          <section className="Certification flex  m-2 gap-10">
            <div className="flex">
              <h3 className="flex items-center text-xl font-bold mr-15">
                Certificate
              </h3>
              <ul
                className="flex flex-col text-base text-left list-none pl-0"
                dir="ltr"
                style={{
                  direction: "ltr",
                  textAlign: "left",
                  unicodeBidi: "plaintext",
                }}
              >
                {form.certificates.map((cer, index) => (
                  <li key={index} className="mb-2 list-none text-left">
                    <div
                      className="text-left"
                      style={{ direction: "ltr", whiteSpace: "pre-wrap" }}
                    >
                      <strong className="block text-[14px]">
                        {cer.CerName}
                      </strong>
                      <div className="text-[12px] font-thin">
                        {cer.cerDescription}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <hr />
          <section className="AboutSec flex justify m-2 gap-10 ">
            <h3 className="flex items-center text-xl font-bold mr-16">
              Skills
            </h3>
            <p className="text-[12px] font-thin ">{form.skills}</p>
          </section>
          <hr />
          <section className="Experience flex  m-2 gap-10">
            <div className="flex">
              <h3 className="flex items-center text-xl font-bold mr-15">
                Experience
              </h3>
              <ul
                className="flex flex-col text-base text-left list-none pl-0"
                dir="ltr"
                style={{
                  direction: "ltr",
                  textAlign: "left",
                  unicodeBidi: "plaintext",
                }}
              >
                {form.experience.map((exp, index) => (
                  <li key={index} className="mb-2 list-none text-left">
                    <div
                      className="text-left"
                      style={{ direction: "ltr", whiteSpace: "pre-wrap" }}
                    >
                      <strong className="block text-[14px]">
                        {exp.exName}
                      </strong>
                      <div className="text-[12px] font-thin">
                        {exp.exDescription}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ResumeForm1;
