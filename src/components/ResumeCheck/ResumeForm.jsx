import React, { useEffect, useState } from "react";

import useAuth from "../../Hooks/useAuth";

const ResumeForm = ({ initialResumeText, onSubmit }) => {
  const { user } = useAuth();
  const [resumeText, setResumeText] = useState(initialResumeText);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
        // ... other fields
  });

  useEffect(() => {
    // Retrieve saved resume text from localStorage and set as initial value
    const savedResumeText = localStorage.getItem("resumeText");
    if (savedResumeText) {
      setResumeText(savedResumeText);
    } else {
      setResumeText(initialResumeText);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const combinedData = {
      ...formData,
      resumeText,
    };
    onSubmit(combinedData);
  };

  return (
    <form className="max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white mt-7 mb-7" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={user.displayName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resumeText" className="block font-semibold mb-2">Resume Text</label>
        <textarea
          name="resumeText"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          rows="6"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ResumeForm;