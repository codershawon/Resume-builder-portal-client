import "react-quill/dist/quill.snow.css"; // Import styles

import React, { useEffect, useRef, useState } from "react";

import CoverLetterForm from "./CoverLetterForm";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import ReactToPdf from "react-to-pdf";
import SectionTitle from "../../Hooks/SectionTitle";
import htmlToPdf from "html-to-pdf";
import mammoth from "mammoth";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CoverLetterChecker = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [keywordMatches, setKeywordMatches] = useState([]);
  const [coverLetterText, setCoverLetterText] = useState("");
  const [showCoverLetterForm, setShowCoverLetterForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [editedContent, setEditedContent] = useState(""); // Content edited within the selected template
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    // Define your keywords here
    const keywords = [
      "passion",
      "skills",
      "experience",
      "teamwork",
      "leadership",
      "communication",
      "problem-solving",
      "innovation",
      "creativity",
      "organization",
      "adaptability",
      "motivation",
      "collaboration",
      "initiative",
      "strategic",
      "detail-oriented",
      "customer service",
      "time management",
      "self-motivated",
      "project management",
      // Add more keywords as needed
    ];

    // Function to analyze cover letter based on keywords
    const analyzeCoverLetter = (text) => {
      const matches = keywords.filter((keyword) =>
        text.toLowerCase().includes(keyword.toLowerCase())
      );
      return matches;
    };

    // When cover letter text changes, analyze it and calculate progress percentage
    if (coverLetterText) {
      const matches = analyzeCoverLetter(coverLetterText);
      setKeywordMatches(matches);
      const totalKeywords = keywords.length;
      const matchedKeywords = matches.length;
      const percentage = (matchedKeywords / totalKeywords) * 100;
      setProgressPercentage(percentage);
    } else {
      setKeywordMatches([]);
      setProgressPercentage(0);
    }
  }, [coverLetterText]);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    if (file.type === "application/pdf") {
      const pdfText = await extractPdfText(file);
      setCoverLetterText(pdfText);
    } else if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      try {
        const { value } = await mammoth.extractRawText({
          arrayBuffer: await file.arrayBuffer(),
        });
        setCoverLetterText(value);
      } catch (error) {
        console.error("Error extracting raw text from DOCX:", error);
        setCoverLetterText("Error extracting text from DOCX");
      }
    }
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

  const handleContinueEditing = () => {
    localStorage.setItem("coverLetterText", coverLetterText);
    setShowCoverLetterForm(true);
  };

  const handleSaveAsPDF = () => {
    if (editedContent) {
    // Create a ref for the content to be converted to PDF
    const contentRef = useRef(null);

    // Define options for PDF generation (e.g., page size, margin)
    const options = {
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      margin: [10, 10, 10, 10], // top, right, bottom, left margins
    };

    // Generate the PDF using ReactToPdf
    ReactToPdf()
      .set(options)
      .from(contentRef.current) // Pass the ref of the content to be converted
      .save("cover_letter.pdf");
  }
  };

  return (
    <div className="rgContainer my-[80px]">
      <SectionTitle subHeading={"Cover Letter Checker"} heading={"Check your cover letter"} />
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
                  Drag and drop a cover letter file here, or click to select a file
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
                Keywords Matched: {keywordMatches.join(", ")}
              </p>
              <div className="mt-2">
                <div className="text-lg font-semibold">Progress:</div>
                <div className="bg-blue-200 h-4 rounded-full">
                  <div
                    className="bg-[#197685] h-full rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-lg mt-1">{`${progressPercentage.toFixed(2)}%`}</div>
              </div>
            </div>
            <div className="flex gap-10 text-center justify-center pt-6">
              {/* <button className="my-btn" onClick={handleContinueEditing}>
                Continue Editing
              </button> */}
              <Link to="/coverLetterBuilder/:id">
                <button className="my-btn">Create New Cover Letter</button>
              </Link>
            </div>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default CoverLetterChecker;
