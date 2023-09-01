import { Controller, useForm } from "react-hook-form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";

import Dropzone from "react-dropzone";

const fieldTypes = [
  { value: "text", label: "Text" },
  { value: "textarea", label: "Textarea" },
  { value: "email", label: "Email" },
  { value: "radio", label: "Radio Buttons" },
  { value: "checkbox", label: "Checkboxes" },
  { value: "file", label: "File Upload" },
];

const ResumeFormBuilder = () => {
  const { handleSubmit, control } = useForm();
  const [fields, setFields] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [columnCount, setColumnCount] = useState(1);

  const onDragEnd = (result) => {
    // Handle field reordering here
  };

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const addField = (type) => {
    let newField;
    switch (type) {
      // ... (same as previous code)
    }
    setFields([...fields, newField]);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Resume Form Builder</h2>
      <div className="mb-4">
        <label className="font-semibold">Choose Column Count:</label>
        <select
          value={columnCount}
          onChange={(e) => setColumnCount(Number(e.target.value))}
          className="px-2 py-1 border rounded-md ml-2"
        >
          <option value={1}>One Column</option>
          <option value={2}>Two Columns</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="fields" direction={columnCount === 1 ? "vertical" : "horizontal"}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`grid grid-cols-${columnCount} gap-4`}
                >
                  {/* ... (same as previous code) */}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="mt-4">
            <button
              type="button"
              className="my-btn"
              onClick={() => addField("text")}
            >
              Add Text Field
            </button>
            <button
              type="button"
              className="my-btn"
              onClick={() => addField("textarea")}
            >
              Add Textarea Field
            </button>
            {/* Add more field type buttons as needed */}
          </div>
          <Dropzone onDrop={handleFileUpload} className="mt-4">
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border-dashed border-2 border-[#197685] p-8 rounded-lg cursor-pointer"
              >
                <input {...getInputProps()} />
                <div className="text-center">
                  <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                  <p className="text-gray-500">
                    Drag and drop a file here, or click to select a file
                  </p>
                  {uploadedFile && (
                    <p className="text-green-500 mt-2">
                      Uploaded File: {uploadedFile.name}
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
        </form>
        <div>
          <h3 className="text-xl font-semibold mb-4">Live Auto-Display</h3>
          <div className="bg-white border p-4 rounded shadow">
            {fields.map((field, index) => (
              <div key={field.name} className="mb-4">
                {field.type === "text" && (
                  <input
                    type="text"
                    placeholder={field.label}
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                )}
                {field.type === "textarea" && (
                  <textarea
                    placeholder={field.label}
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                )}
                {/* Add more cases for different field types */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <button type="submit" className="my-btn">
          Save Form
        </button>
        <button className="my-btn ml-4">Download Form</button>
        <button className="my-btn ml-4">Share Form</button>
      </div>
    </div>
  );
};

export default ResumeFormBuilder;
