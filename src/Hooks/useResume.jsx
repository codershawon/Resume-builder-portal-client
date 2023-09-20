import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState([]);

  const updateResumeData = (newData) => {
    setResumeData(newData);
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
