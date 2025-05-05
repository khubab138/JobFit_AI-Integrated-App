import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeBuilder = () => {
  const handleEduInPutChange = () => {};

  const [form, setForm] = useState({
    name: "",
    applyingFor: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
    education: [{ heading: "", description: "" }],
    certificates: [{ CerName: "", cerDescription: "" }],
    skills: "",
    experience: [{ exName: "", exDescription: "" }],
  });

  const resumeRef = useRef();

  //Education input Section Functionality
  const handleEducationChange = (index, Field, value) => {
    const updated = [...form.education];
    updated[index][Field] = value;
    setForm({ ...form, education: updated });
  };

  const addEducationField = () => {
    setForm({
      ...form,
      education: [...form.education, { heading: "", description: "" }],
    });
  };

  // Certificate Input Section
  const handleCertificateonChange = (index, field, value) => {
    const updated = [...form.certificates];
    updated[index][field] = value;
    setForm({ ...form, certificates: updated });
  };

  const addCertificateField = () => {
    setForm({
      ...form,
      certificates: [...form.certificates, { CerName: "", cerDescription: "" }],
    });
  };

  // Experince InputField
  const handleExperinceonChange = (index, field, value) => {
    const updated = [...form.experience];
    updated[index][field] = value;
    setForm({ ...form, experience: updated });
  };

  const addExperinceField = () => {
    setForm({
      ...form,
      experience: [...form.experience, { exName: "", exDescription: "" }],
    });
  };

  // Handle the Onchange  on the Form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="ltr" dir="ltr">
      <div className="flex">
        <a
          className="flex flex-wrap flex-row justify-between place-items-center "
          href="http://localhost:5173/"
        >
          <img className="h-18" src="\src\assets\Logo\L.svg" alt="img od" />
          <span className="text-2xl font-semibold text-white ">jobfit</span>
        </a>
      </div>
      <div className="flex gap-8 p-8 font-sans">
        <div className=" flex-1 flex flex-col gap-4">
          <div className="INTRODUCTION flex-1 gap-4 p-5">
            <h2 className="text-4xl pb-5 font-bold">Introduction</h2>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              name="applyingFor"
              placeholder="applyingFor Or Role of the Job"
              onChange={handleChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
            <input
              name="address"
              placeholder="Enter your Recent Address"
              onChange={handleChange}
              className="p-2 m-2 text-base border border-gray-300 rounded"
            />
          </div>
          <h2 className="text-4xl pb-5 font-bold">Summary</h2>
          <textarea
            name="aboutMe"
            placeholder="About Your-Self Or Summerized"
            maxLength={300}
            onChange={handleChange}
            className="p-2 text-base border border-gray-300 rounded resize-y h-20"
          />
          <div className="flex-1  flex-col ">
            <h2 className="text-4xl pb-5  font-bold">Education</h2>
            {form.education.map((edu, index) => (
              <div key={index}>
                <input
                  value={edu.heading}
                  placeholder={`Degree ${index + 1}`}
                  onChange={(e) =>
                    handleEducationChange(index, "heading", e.target.value)
                  }
                  className="p-2 m-2 text-base border border-gray-300 rounded"
                />
                <input
                  value={edu.description}
                  placeholder={`Institute and Passing Year ${index + 1}`}
                  onChange={(e) =>
                    handleEducationChange(index, "description", e.target.value)
                  }
                  className="p-2 mb-2 text-base w-full border border-gray-300 rounded "
                />
              </div>
            ))}
            <button
              className="cursor-pointer bg-gray text-white"
              onClick={addEducationField}
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
                    handleCertificateonChange(index, "CerName", e.target.value)
                  }
                  className="p-2 m-2 text-base border border-gray-300 rounded"
                />
                <input
                  value={cer.cerDescription}
                  placeholder={`Institute and Passing Year ${index + 1}`}
                  onChange={(e) =>
                    handleCertificateonChange(
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
              onClick={addCertificateField}
            >
              Add More Certificate
            </button>
          </div>
          <div className="flex-1 flex-col ">
            <h2 className="text-4xl pb-5  font-bold">Skills</h2>
            <textarea
              name="skills"
              placeholder="Skills"
              onChange={handleChange}
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
                    handleExperinceonChange(index, "exName", e.target.value)
                  }
                  className="p-2 m-2 text-base border border-gray-300 rounded"
                />
                <input
                  value={exp.exDescription}
                  placeholder={`Expirience on work or Project ${index + 1}`}
                  onChange={(e) =>
                    handleExperinceonChange(
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
              onClick={addExperinceField}
            >
              Add More Field
            </button>
          </div>
          <button
            onClick={downloadPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download PDF
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
export default ResumeBuilder;
