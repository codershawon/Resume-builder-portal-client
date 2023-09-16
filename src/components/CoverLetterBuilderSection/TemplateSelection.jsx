import React, { useState } from "react";

function TemplateSelection({ templateImages, onSelectTemplate }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelectTemplate = (index) => {
    setSelectedTemplate(index + 1);
    onSelectTemplate(index + 1);
  };

  return (
    <div>
      <h2>Select a Template</h2>
      <div className="template-images">
        {templateImages && templateImages.length > 0 ? (
          templateImages.map((imageUrl, index) => (
            <div
              key={index}
              className={`template-image ${
                selectedTemplate !== null && selectedTemplate !== index + 1
                  ? "hidden"
                  : ""
              }`}
            >
              <img
                src={imageUrl}
                alt={`Template ${index + 1}`}
                onClick={() => handleSelectTemplate(index)}
                className={selectedTemplate === index + 1 ? "selected" : ""}
              />
            </div>
          ))
        ) : (
          <p>No templates available</p>
        )}
      </div>
    </div>
  );
}

export default TemplateSelection;
