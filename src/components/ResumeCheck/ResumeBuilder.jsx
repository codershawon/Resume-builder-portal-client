import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import React, { useState } from "react";

import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import SectionTitle from "../../Hooks/SectionTitle";
import mammoth from "mammoth";
import { pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



const ResumeBuilder = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resultPercentage, setResultPercentage] = useState(0);

  const [resumeText, setResumeText] = useState("");
  const [resumeTextExtracted, setResumeTextExtracted] = useState("");
  const [showResumeForm, setShowResumeForm] = useState(false);
  const { t } = useTranslation(["resumeBuilder"]);

     // Define your list of resume keywords
     const resumeKeywords = [
      "name",
      "objective",
      "address",
      "education",
      "skills",
      "hobbies",
      "languages",
      "projects",
      "experience",
      "image",
      "certifications",
      "awards",
      "publications",
      // Add more keywords as needed
    ];

  const onDrop = async (acceptedFiles) => {
  

    const file = acceptedFiles[0];
    setUploadedFile(file);

    const fileContent = await readFileContents(file);
    setResultPercentage(calculateProgressPercentage(fileContent));

    // Extract and store the text associated with keywords
    const keywordTextMap = extractKeywordText(fileContent);
    setResumeTextExtracted(keywordTextMap);

    // Store the entire extracted resume text in local storage
    localStorage.setItem("resumeTextExtracted", JSON.stringify(keywordTextMap));

    if (file.type === "application/pdf") {
      const pdfText = await extractPdfText(file);
      setResumeTextExtracted(pdfText);
    } else if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      try {
        const { value } = await mammoth.extractRawText({
          arrayBuffer: await file.arrayBuffer(),
        });
        setResumeTextExtracted(value);
      } catch (error) {
        console.error("Error extracting raw text from DOCX:", error);
        setResumeTextExtracted("Error extracting text from DOCX");
      }
    }

    setResumeText(fileContent);
  };


  const extractKeywordText = (resumeText) => {
    const lowerCaseText = resumeText.toLowerCase();
    const keywordTextMap = {};

    resumeKeywords.forEach((keyword) => {
      const startIndex = lowerCaseText.indexOf(keyword);
      if (startIndex !== -1) {
        const endIndex = lowerCaseText.indexOf(keyword, startIndex + 1);
        if (endIndex !== -1) {
          const keywordText = resumeText.substring(startIndex, endIndex);
          keywordTextMap[keyword] = keywordText;
        }
      }
    });

    return keywordTextMap;
  };

  const calculateProgressPercentage = (resumeText) => {
    const lowerCaseText = resumeText.toLowerCase();
    const totalKeywords = resumeKeywords.length;
    let foundKeywords = 0;
  
    resumeKeywords.forEach((keyword) => {
      if (lowerCaseText.includes(keyword)) {
        foundKeywords++;
      }
    });
  
    // Calculate the percentage based on the keywords found
    const keywordPercentage = (foundKeywords / totalKeywords) * 50; // You have 60% to add to the minimum 40%
  
    // Add the keyword percentage to the minimum 40%
    const totalPercentage = Math.min(100, 50 + keywordPercentage); // Ensure it doesn't exceed 100%
  
    // Round the total percentage to the nearest whole number
    const roundedPercentage = Math.round(totalPercentage);
  
    return roundedPercentage;
  };

  const readFileContents = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };



  const extractPdfText = async (pdfFile) => {
    const fileBuffer = await pdfFile.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: fileBuffer }).promise;
    let text = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageText = await page.getTextContent();
      pageText.items.forEach((item) => {
        text += item.str + " ";
        if (item.transform[5] !== pageText.items[0].transform[5]) {
          text += "\n";
        }
      });
    }

    return text;
  };

  const handleSubmitForm = (formData) => {
    console.log("Form data submitted:", formData);
    localStorage.setItem("resumeFormData", JSON.stringify(formData));
  };

  // const handleContinueEditing = () => {
  //   localStorage.setItem("resumeText", resumeTextExtracted);
  //   setShowResumeForm(true);
  // };


  return (

    <div className="rgContainer my-[80px]">

    <div className="rgContainer mb-28">
      {/* SubTile Section Start */}
      <SectionTitle subHeading= {t("resumeBuilder:subHeading")} heading={t("resumeBuilder:heading")} />
      <div className="p-8 bg-gray-50">
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
                {t("resumeBuilder:dragAndDropFile")}
                    <br />
                    {t("resumeBuilder:acceptableFileTypes")}
                </p>
              </div>
            </div>
          )}
        </Dropzone>
        {uploadedFile && (
          <div className="mt-6">
            <p className="text-lg font-semibold">
            {t("resumeBuilder:uploadedFile")}: {uploadedFile.name}
            </p>
            <div className="mt-4">
              <p className="text-lg font-semibold">
              {t("resumeBuilder:resultPercentage")}: {resultPercentage}%
              </p>
              <div className="bg-blue-200 h-4 rounded-full mt-2">
                <div
                  className="bg-[#197685] h-full rounded-full"
                  style={{ width: `${resultPercentage}%` }}
                ></div>
              </div>
            </div>

        
            <div className="flex gap-10 text-center justify-center pt-6">
              <Link to="/resumeBuilder/:id">
                <button className="my-btn">{t("resumeBuilder:createNewResume")}</button>
              </Link>

            </div>
          </div>
        )}
      </div>
     
     
    </div>
    </div>

  );
};

export default ResumeBuilder;