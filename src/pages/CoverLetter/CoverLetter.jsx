import { Document, Page, pdfjs } from "react-pdf";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import React, { useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CoverLetter = ({
  senderInfo,
  recipientInfo,
  salutation,
  body,
  closing,
  signature,
  date,
}) => {

    const [pdfVisible, setPdfVisible] = useState(false);

  const handleDownloadPDF = async () => {
    setPdfVisible(true);

    setTimeout(async () => {
      const pdfElement = document.getElementById("cover-letter-pdf");
      const canvas = await html2canvas(pdfElement, { scale: 2 });

      // Create a hidden <a> element to trigger the download
      const a = document.createElement("a");
      a.style.display = "none";

      // Convert the canvas to a data URL
      const imgData = canvas.toDataURL("image/png");

      // Create a new jsPDF instance
      const pdf = new jsPDF("p", "mm", "a4");

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // Adjust size as needed (A4 paper size)

      // Save the PDF as a Blob
      const pdfBlob = pdf.output("blob");

      // Set the Blob as the href of the <a> element
      const blobUrl = URL.createObjectURL(pdfBlob);
      a.href = blobUrl;

      // Specify the file name for the download
      a.download = "cover_letter.pdf";

      // Trigger the click event on the <a> element
      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      setPdfVisible(false);
    });
  };
    
  return (
  <>
    <div>
    <div className="w-8.27in h-11.69in mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Cover Letter</h1>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 font-medium">Your Information:</p>
            {senderInfo.name && <p className="text-gray-900">{senderInfo.name}</p>}
            {senderInfo.address && <p className="text-gray-900">{senderInfo.address}</p>}
            {(senderInfo.city || senderInfo.state || senderInfo.zipCode) && (
              <p className="text-gray-900">
                {senderInfo.city}, {senderInfo.state}, {senderInfo.zipCode}
              </p>
            )}
            {senderInfo.email && <p className="text-gray-900">{senderInfo.email}</p>}
            {senderInfo.phone && <p className="text-gray-900">{senderInfo.phone}</p>}
          </div>
          {date && (
            <div>
              <p className="text-right text-gray-700 font-medium">Date:</p>
              <p className="text-right text-gray-900">{date}</p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 font-medium">Recipient's Information:</p>
        {recipientInfo.employerName && (
          <p className="text-gray-900">{recipientInfo.employerName}</p>
        )}
        {recipientInfo.companyName && <p className="text-gray-900">{recipientInfo.companyName}</p>}
        {recipientInfo.companyAddress && (
          <p className="text-gray-900">{recipientInfo.companyAddress}</p>
        )}
        {(recipientInfo.city || recipientInfo.state || recipientInfo.zipCode) && (
          <p className="text-gray-900">
            {recipientInfo.city}, {recipientInfo.state}, {recipientInfo.zipCode}
          </p>
        )}
      </div>
      <div className="mt-6">
        {salutation && <div className="text-left text-gray-900" dangerouslySetInnerHTML={{ __html: salutation }} />}
      </div>
      <div className="mt-6 text-justify text-gray-900 leading-7">
        {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
      </div>
      <div className="mt-6">
        {closing && <div className="text-justify text-gray-900" dangerouslySetInnerHTML={{ __html: closing }} />}
      </div>
      <div className="mt-6 text-left">
        <p className="text-gray-700 font-medium">Sincerely,</p>
        {signature && <div className="font-semibold" dangerouslySetInnerHTML={{ __html: signature }} />}
      </div>
    </div>
      {/* PDF preview */}
      {pdfVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
          <Document file="">
            <Page pageNumber={1} />
          </Document>
        </div>
      )}

      {/* Download button */}
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
      >
        Download
      </button>
      {/* Share buttons */}
      <div className="mt-4">
        <EmailShareButton
          url={window.location.href} // Change to your desired URL
          subject="Check out my cover letter"
          body="I'm sharing my cover letter with you."
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton
          url={window.location.href} // Change to your desired URL
          quote="Check out my cover letter"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href} // Change to your desired URL
          title="Check out my cover letter"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
    
  </>
  );
};

export default CoverLetter;
