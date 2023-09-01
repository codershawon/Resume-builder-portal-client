import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <div className="breadcrumb-wrap">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link className="text-[#efc778] hover:underline " to="/">
                Home
              </Link>
            </li>
            <li>
              <span>Terms of Sevice</span>
            </li>
          </ul>
        </nav>
      </div>
     
      {/* TODO  */}
      <div>
        <div className="mt-16 mb-20 text-center text-gray-700 ">
          <h2 className="text-3xl lg:text-5xl font-semibold border-b-2 w-72 lg:w-96 border-gray-800 pb-2 mx-auto">Terms of Sevice</h2>
        </div>
      </div>

      <div  className="my-10 px-6 md:px-20 lg:px-36">
        <p>
          Welcome to Our Resume Genius Website . These terms
          and conditions ("Terms") govern your use of the Website and the
          services offered through it. By accessing or using the Website, you
          agree to these Terms. If you do not agree with these Terms, please do
          not use the Website.
        </p>
      </div>


      <div className="my-10 flex-grow px-6 md:px-20 lg:px-36">
        <div>
          <h2 className="text-4xl font-samibold mb-3">Full Terms of Sevice</h2>
          <p>Last Updated: November 01, 2023</p>
        </div>
      </div>

      <div className="my-10 px-6 md:px-20 lg:px-36">
        <div>
          <h4  className="text-3xl font-bold mb-8"> 1. User Eligibility</h4>
          <p>
            You must be 1 years of age or older to use the Website. By using
            the Website, you represent and warrant that you meet this
            eligibility requirement.
          </p>
        </div>
        <div className="my-10">
          <h4 className="text-3xl font-bold mb-4">2. Use of Services</h4>
          <p>
            <p className="mt-3">a. The Website offers a resume-building service. You are responsible
            for the accuracy and completeness of the information you provide. </p>
          <p className="mt-3">  b.
            You may not use the Website for any unlawful or prohibited purpose.</p>
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-8">3. Intellectual Property</h2>
          <p>
            <p className="mt-4">
              a. The content and design of the Website are owned by Web Battalion and are protected by intellectual property laws.
            </p>

            <p className="mt-4">
              b. You may not reproduce, modify, distribute, or create derivative
              works based on the Website's content without explicit permission.
            </p>
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-8"> 4. Privacy</h2>
          <p>
            a. Your use of the Website is also governed by our Privacy Policy,
            which can be found <Link className="text-[#197685] cursor-pointer hover:underline font-bold" to="/privacyPolicy">Privacy Policy</Link>.
          </p>
        </div>
        <div className="mb-10">
          <h2  className="text-3xl font-bold mb-8"> 5. User Content</h2>
          <p>
            a. By submitting content to the Website, you grant Web Battalion a non-exclusive, royalty-free, perpetual, and worldwide
            license to use, modify, and reproduce the content.
          </p>
        </div>
        <div className="mb-10">
          <h2  className="text-3xl font-bold mb-8"> 6. Limitation of Liability</h2>

          <p className="mt-3">
            a. Web Battalion makes no warranties or representations about
            the accuracy or completeness of the content provided through the
            Website.
          </p>

          <p className="mt-3">
            b. In no event shall Web Battalion be liable for any indirect,
            incidental, special, or consequential damages.
          </p>
        </div>
        <div className="mb-10">
          <h2  className="text-3xl font-bold mb-8"> 7. Termination</h2>
          <p>
            a. Web Battalion reserves the right to terminate or suspend
            your access to the Website at any time for violations of these
            Terms.
          </p>
        </div>
        <div className="mb-10">
          <h2  className="text-3xl font-bold mb-8"> 8. Changes to Terms</h2>
          <p>
            a. Web Battalion reserves the right to modify these Terms at
            any time. You will be notified of any changes, and your continued
            use of the Website after the changes are made constitutes acceptance
            of the revised Terms.
          </p>
        </div>

        <div className="mb-10">
          <h2  className="text-3xl font-bold mb-8"> 9. Governing Law</h2>
          <p>
            <p>
              a. These Terms are governed by the laws of [Your Jurisdiction].
              Any disputes arising from these Terms shall be resolved in the
              courts of [Your Jurisdiction].
            </p>

            <p>
              If you have any questions or concerns about these Terms, please
              contact us at <Link className="text-[#197685] cursor-pointer hover:underline font-bold" to="/contactUs"> contact us</Link> .
            </p>

            <p>
              Remember, it's important to customize the template to fit the
              specifics of your resume builder website and to seek legal advice
              or consult with a professional to ensure that your Terms of
              Service are legally sound and accurate.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
