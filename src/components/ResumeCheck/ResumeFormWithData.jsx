// ResumeFormWithData.js

import React from "react";
import ResumeForm from "./ResumeForm"; // Import your ResumeForm component here
import { useLocation } from "react-router-dom";

const ResumeFormWithData = () => {
  
  const location = useLocation();
  const { resumeText } = location.state;

  return (
    <div className="rgContainer my-[80px]">
      <div className="p-8 bg-gray-50">
        <h2>Resume Editing Page</h2>
        <p>Resume Text: {resumeText}</p>
        {resumeText && (
          <div>
            {/* Render the ResumeForm component with the data */}
            <ResumeForm initialResumeText={resumeText} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeFormWithData;
