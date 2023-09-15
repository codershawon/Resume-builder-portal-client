import "react-quill/dist/quill.snow.css"; // Import styles

import React, { useEffect, useState } from "react";

import ReactQuill from "react-quill";

const CoverLetterForm = ({ showForm, initialCoverLetterText, onSubmit }) => {
  const [coverLetterText, setCoverLetterText] = useState("");

  useEffect(() => {
    // Load the initial cover letter text from local storage when the component mounts
    const storedText = localStorage.getItem("coverLetterText");
    if (showForm) {
      // Only set the text if the form is visible (showForm is true)
      setCoverLetterText(storedText || initialCoverLetterText || "");
    }
  }, [showForm, initialCoverLetterText]);

  const handleChange = (value) => {
    setCoverLetterText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform any validation here before submitting the form.
    // For example, you can check if the coverLetterText is not empty.

    // Call the onSubmit callback with the cover letter text.
    onSubmit(coverLetterText);

    // Save the cover letter text to local storage
    localStorage.setItem("coverLetterText", coverLetterText);
  };

  return (
    <div className={`mt-6 ${showForm ? "" : "hidden"}`}>
     <form onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-lg font-semibold mb-2" htmlFor="coverLetterText">
      Cover Letter Text
    </label>
    <ReactQuill
      value={coverLetterText}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["link"],
        ],
      }}
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "link",
      ]}
    />
  </div>
</form>

    </div>
  );
};

export default CoverLetterForm;
