import "react-quill/dist/quill.snow.css";

import React, { useEffect, useState } from "react";

import CoverLetter from "./CoverLetter";
import ReactQuill from "react-quill";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CoverLetterFormBuilder = () => {
  const initialFormData = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",

    date: "", // Make sure it's initialized as a string

    recipientName: "",
    companyName: "",
    companyAddress: "",
    companyCity: "",
    companyState: "",
    companyZipCode: "",

    greeting: "",
    body: "",
    closing: "",
    signature: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [inputProgress, setInputProgress] = useState(0);
  const [activeInput, setActiveInput] = useState(""); // Track the active input field

  // Define placeholders for each input field
  const placeholders = {
    name: "Enter your name",
    address: "Enter your address",
    city: "Enter your city",
    state: "Enter your state",
    zipCode: "Enter your zip code",
    email: "Enter your email",
    phone: "Enter your phone number",
    date: "Enter the date",

    recipientName: "Enter recipient's name",
    companyName: "Enter company name",
    companyAddress: "Enter company address",
    companyCity: "Enter company city",
    companyState: "Enter company state",
    companyZipCode: "Enter company zip code",

    greeting: "Enter greeting",
    body: "Enter body text",
    closing: "Enter closing",
    signature: "Enter your signature",
  };

  useEffect(() => {
    // Function to calculate input progress based on the formData
    const calculateProgress = () => {
      const fields = Object.keys(formData);
      const totalFields = fields.length;
      const filledFields = fields.filter((field) => {
        if (typeof formData[field] === "object") {
          // Handle date field
          return !!formData[field].date;
        }
        return !!formData[field];
      }).length;
      const progress = (filledFields / totalFields) * 100;
      setInputProgress(progress);
    };
  }, [formData]);

  // Function to handle changes in input fields
  const handleInputChange = (section, field, value) => {
    // Update the form data
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));

    // Automatically move to the next input field
    const fields = Object.keys(initialFormData);
    const currentIndex = fields.indexOf(`${section}.${field}`);
    if (currentIndex !== -1 && currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      setActiveInput(nextField); // Set the currently active input
    } else {
      setActiveInput(""); // No more fields to focus on
    }
  };

  // Function to handle changes in Quill editors
  const handleQuillChange = (name, value) => {
    // Update the form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {/* Progress Bar */}
        <div className="mb-4 ">
          <label
            htmlFor="progress"
            className="block text-gray-700 font-bold mb-2"
          >
            Input Progress
          </label>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  {Math.round(inputProgress)}%
                </span>
              </div>
            </div>
            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-teal-200">
              <div
                style={{ width: `${inputProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
              ></div>
            </div>
          </div>
        </div>
        {/* Sender Info */}

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <ReactQuill
            value={formData.name}
            placeholder={placeholders.name} 
            onChange={(value) => handleQuillChange("name", value)}
            className="quill"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <ReactQuill
            value={formData.address}
            onChange={(value) => handleQuillChange("address", value)}
            className="quill"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <ReactQuill
            value={formData.city}
            onChange={(value) => handleQuillChange("city", value)}
            className="quill"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
            State
          </label>
          <ReactQuill
            value={formData.state}
            onChange={(value) => handleQuillChange("state", value)}
            className="quill"
          />
        </div>

        {/* Zip Code */}
        <div className="mb-4">
          <label
            htmlFor="zipCode"
            className="block text-gray-700 font-bold mb-2"
          >
            Zip Code
          </label>
          <ReactQuill
            value={formData.zipCode}
            onChange={(value) => handleQuillChange("zipCode", value)}
            className="quill"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <ReactQuill
            value={formData.email}
            onChange={(value) => handleQuillChange("email", value)}
            className="quill"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <ReactQuill
            value={formData.phone}
            onChange={(value) => handleQuillChange("phone", value)}
            className="quill"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <ReactQuill
            value={formData.date}
            onChange={(value) => handleQuillChange("date", value)}
            className="quill"
          />
        </div>

        {/* Recipient Info */}
        {/* Recipient's Name */}
        <div className="mb-4">
          <label
            htmlFor="recipientName"
            className="block text-gray-700 font-bold mb-2"
          >
            Recipient's Name
          </label>
          <ReactQuill
            value={formData.recipientName}
            onChange={(value) => handleQuillChange("recipientName", value)}
            className="quill"
          />
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-gray-700 font-bold mb-2"
          >
            Company Name
          </label>
          <ReactQuill
            value={formData.companyName}
            onChange={(value) => handleQuillChange("companyName", value)}
            className="quill"
          />
        </div>

        {/*  Company Address */}
        <div className="mb-4">
          <label
            htmlFor="companyAddress"
            className="block text-gray-700 font-bold mb-2"
          >
            Company Address
          </label>
          <ReactQuill
            value={formData.companyAddress}
            onChange={(value) => handleQuillChange("companyAddress", value)}
            className="quill"
          />
        </div>

        {/*Company City */}
        <div className="mb-4">
          <label
            htmlFor="companyCity"
            className="block text-gray-700 font-bold mb-2"
          >
            Company City
          </label>
          <ReactQuill
            value={formData.companyCity}
            onChange={(value) => handleQuillChange("companyCity", value)}
            className="quill"
          />
        </div>

        {/*Company State */}

        <div className="mb-4">
          <label
            htmlFor="companyState"
            className="block text-gray-700 font-bold mb-2"
          >
            Company State
          </label>
          <ReactQuill
            value={formData.companyState}
            onChange={(value) => handleQuillChange("companyState", value)}
            className="quill"
          />
        </div>

        {/*Company Zip Code */}

        <div className="mb-4">
          <label
            htmlFor="companyZipCode"
            className="block text-gray-700 font-bold mb-2"
          >
            Company Zip Code
          </label>
          <ReactQuill
            value={formData.companyZipCode}
            onChange={(value) => handleQuillChange("companyZipCode", value)}
            className="quill"
          />
        </div>

        {/* Greeting */}
        <div className="mb-4">
          <label
            htmlFor="greeting"
            className="block text-gray-700 font-bold mb-2"
          >
            Greeting
          </label>
          <ReactQuill
            value={formData.greeting}
            onChange={(value) => handleQuillChange("greeting", value)}
            className="quill"
          />
        </div>

        {/* Body */}
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
            Body
          </label>
          <ReactQuill
            value={formData.body}
            onChange={(value) => handleQuillChange("body", value)}
            className="quill"
          />
        </div>

        {/* Closing */}
        <div className="mb-4">
          <label
            htmlFor="closing"
            className="block text-gray-700 font-bold mb-2"
          >
            Closing
          </label>
          <ReactQuill
            value={formData.closing}
            onChange={(value) => handleQuillChange("closing", value)}
            className="quill"
          />
        </div>

        {/* Signature */}
        <div className="mb-4">
          <label
            htmlFor="signature"
            className="block text-gray-700 font-bold mb-2"
          >
            Your Signature
          </label>
          <ReactQuill
            value={formData.signature}
            onChange={(value) => handleQuillChange("signature", value)}
            className="quill"
          />
        </div>
      </div>

      <div className="w-1/2 p-4 ">
        {/* Cover Letter */}
        <div className="cover-letter-pdf p-4">
          <CoverLetter {...formData} />
        </div>
      </div>
    </div>
  );
};
export default CoverLetterFormBuilder;
