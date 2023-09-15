import "react-quill/dist/quill.snow.css";

import React, { useEffect, useState } from "react";

import CoverLetter from "./CoverLetter";
import ReactQuill from "react-quill";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const CoverLetterFormBuilder = () => {
  const initialFormData = {
    senderInfo: {
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      phone: "",
    },
    date: "", // Make sure it's initialized as a string
    recipientInfo: {
      employerName: "",
      companyName: "",
      companyAddress: "",
      city: "",
      state: "",
      zipCode: "",
    },
    salutation: "",
    body: "",
    closing: "",
    signature: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [inputProgress, setInputProgress] = useState(0);

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

    // Update input progress whenever formData changes
    calculateProgress();
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
      <div className="mb-4">
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
        <div className="mb-4">
          <label
            htmlFor="senderInfo.name"
            className="block text-gray-700 font-bold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="senderInfo.name"
            name="name"
            placeholder="Your Name"
            value={formData.senderInfo.name}
            onChange={(e) =>
              handleInputChange("senderInfo", "name", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="senderInfo.address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="senderInfo.address"
            name="address"
            placeholder="Address"
            value={formData.senderInfo.address}
            onChange={(e) =>
              handleInputChange("senderInfo", "address", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label
            htmlFor="senderInfo.city"
            className="block text-gray-700 font-bold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="senderInfo.city"
            name="city"
            placeholder="City"
            value={formData.senderInfo.city}
            onChange={(e) =>
              handleInputChange("senderInfo", "city", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label
            htmlFor="senderInfo.state"
            className="block text-gray-700 font-bold mb-2"
          >
            State
          </label>
          <input
            type="text"
            id="senderInfo.state"
            name="state"
            placeholder="State"
            value={formData.senderInfo.state}
            onChange={(e) =>
              handleInputChange("senderInfo", "state", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Zip Code */}
        <div className="mb-4">
          <label
            htmlFor="senderInfo.zipCode"
            className="block text-gray-700 font-bold mb-2"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="senderInfo.zipCode"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.senderInfo.zipCode}
            onChange={(e) =>
              handleInputChange("senderInfo", "zipCode", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="senderInfo.email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="senderInfo.email"
            name="email"
            placeholder="Email"
            value={formData.senderInfo.email}
            onChange={(e) =>
              handleInputChange("senderInfo", "email", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="senderInfo.phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="senderInfo.phone"
            name="phone"
            placeholder="Phone"
            value={formData.senderInfo.phone}
            onChange={(e) =>
              handleInputChange("senderInfo", "phone", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={(e) => handleInputChange("date", "date", e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Recipient Info */}
        {/* Employer's Name */}
        <div className="mb-4">
          <label
            htmlFor="recipientInfo.employerName"
            className="block text-gray-700 font-bold mb-2"
          >
            Employer's Name
          </label>
          <input
            type="text"
            id="recipientInfo.employerName"
            name="recipientInfo.employerName"
            placeholder="Employer's Name"
            value={formData.recipientInfo.employerName}
            onChange={(e) =>
              handleInputChange("recipientInfo", "employerName", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label
            htmlFor="recipientInfo.companyName"
            className="block text-gray-700 font-bold mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="recipientInfo.companyName"
            name="recipientInfo.companyName"
            placeholder="Company Name"
            value={formData.recipientInfo.companyName}
            onChange={(e) =>
              handleInputChange("recipientInfo", "companyName", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Company Address */}
        <div className="mb-4">
          <label
            htmlFor="recipientInfo.companyAddress"
            className="block text-gray-700 font-bold mb-2"
          >
            Company Address
          </label>
          <input
            type="text"
            id="recipientInfo.companyAddress"
            name="recipientInfo.companyAddress"
            placeholder="Company Address"
            value={formData.recipientInfo.companyAddress}
            onChange={(e) =>
              handleInputChange(
                "recipientInfo",
                "companyAddress",
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label
            htmlFor="recipientInfo.city"
            className="block text-gray-700 font-bold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="recipientInfo.city"
            name="recipientInfo.city"
            placeholder="City"
            value={formData.recipientInfo.city}
            onChange={(e) =>
              handleInputChange("recipientInfo", "city", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label
            htmlFor="recipientInfo.state"
            className="block text-gray-700 font-bold mb-2"
          >
            State
          </label>
          <input
            type="text"
            id="recipientInfo.state"
            name="recipientInfo.state"
            placeholder="State"
            value={formData.recipientInfo.state}
            onChange={(e) =>
              handleInputChange("recipientInfo", "state", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Zip Code */}
        <div className="mb-4">
          <label
            htmlFor="recipientInfo.zipCode"
            className="block text-gray-700 font-bold mb-2"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="recipientInfo.zipCode"
            name="recipientInfo.zipCode"
            placeholder="Zip Code"
            value={formData.recipientInfo.zipCode}
            onChange={(e) =>
              handleInputChange("recipientInfo", "zipCode", e.target.value)
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Salutation */}
        <div className="mb-4">
          <label
            htmlFor="salutation"
            className="block text-gray-700 font-bold mb-2"
          >
            Salutation
          </label>
          <ReactQuill
            value={formData.salutation}
            onChange={(value) => handleQuillChange("salutation", value)}
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

      <div className="w-1/2 p-4">
      
      

        <div className="cover-letter-pdf p-4">
          <CoverLetter {...formData} />
        </div>
      </div>
    </div>
  );
};
export default CoverLetterFormBuilder;
