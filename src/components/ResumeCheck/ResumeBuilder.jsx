import React, { useState } from "react";

import Dropzone from "react-dropzone";
import axios from "axios";
import SectionTitle from "../../Hooks/SectionTitle";

const ResumeBuilder = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resultPercentage, setResultPercentage] = useState(0);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    // Simulate AI logic to calculate resultPercentage (replace with actual AI logic)
    const fakeAIResult = Math.floor(Math.random() * 101);
    setResultPercentage(fakeAIResult);

    // Simulate sending the file to the server for processing (replace with actual API call)
    // const formData = new FormData();
    // formData.append('resume', file);
    // try {
    //   await axios.post('/api/analyze-resume', formData);
    // } catch (error) {
    //   console.error('Error analyzing resume:', error);
    // }
  };

  const redirectToNewResume = () => {
    // Simulate redirecting to the dashboard route
    // You need to set up your routing accordingly
    // Example: history.push('/dashboard');
  };
  const redirectToDashboard = () => {
    // Simulate redirecting to the dashboard route
    // You need to set up your routing accordingly
    // Example: history.push('/dashboard');
  };

  return (
    <div className="rgContainer my-[80px]">
      {/* SubTile Section Start */}
      <SectionTitle
          subHeading={"Resume Checker"}
          heading={
            "Check your resume"
          }></SectionTitle>
      {/* <div className="text-center max-w-[600px] mx-auto mb-8">
        <h2 className="max-w-[560px] font-bold text-[40px] leading-10 text-gray-700 font-sans">
          Check your resume
        </h2>
      </div> */}
      {/* SubTile Section End */}
      <div className="p-8 bg-gray-50 ">
        {/* <h2 className="text-2xl text-center font-semibold mb-4">Resume Builder</h2> */}

        <Dropzone onDrop={onDrop} accept=".pdf,.doc,.docx,.txt,.htm,.rtf">
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-[#197685] p-8 rounded-lg cursor-pointer"
            >
              <input {...getInputProps()} />
              <div className="text-center">
                <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                <p className="text-gray-500">
                  Drag and drop a resume file here, or click to select a file{" "}
                  <br />
                  Acceptable file types: DOC, DOCX, PDF, HTM, RTF, TXT
                </p>
              </div>
            </div>
          )}
        </Dropzone>
        {uploadedFile && (
          <div className="mt-6">
            <p className="text-lg font-semibold">
              Uploaded File: {uploadedFile.name}
            </p>
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Result Percentage: {resultPercentage}%
              </p>
              <div className="bg-blue-200 h-4 rounded-full mt-2">
                <div
                  className="bg-[#197685] h-full rounded-full"
                  style={{ width: `${resultPercentage}%` }}
                ></div>
              </div>
            </div>
            <div className="flex gap-10 text-center justify-center pt-6">
              <button
                // className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                className="my-btn"
                onClick={redirectToNewResume}
              >
                Create New Resume
              </button>
              <button
                // className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                className="my-btn"
                onClick={redirectToDashboard}
              >
                Continue Editing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
 </FixedWidth>
  );
};

export default ResumeBuilder;
