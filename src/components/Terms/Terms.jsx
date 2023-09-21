import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Hooks/SectionTitle";
import FixedWidth from "../fixedwidth";

const Terms = () => {
  return (
    <div>
      <div className="breadcrumb-wrap md:mb-12 mb-9">
        <nav className="breadcrumbs ">
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
      <SectionTitle
        subHeading={"Agreement and Conditions for Using Resume Genius"}
        heading={"Terms of Service"}
      ></SectionTitle>

   
     
    <div className="max-w-[1600px] mx-auto">
    <div className="my-10 px-6 md:px-20 lg:px-36">
        <p className="font-semibold text-[17px] mb-2">
          Last Updated: November 01, 2023
        </p>
        <p className="text-[17px]">
          Welcome to Our Resume Genius Website . These terms and conditions
          ("Terms") govern your use of the Website and the services offered
          through it. It is important to us that you, and our other visitors,
          have a special experience while using Resume genius and that when you
          use Resume Genius you are fully aware of your respective legal rights
          and obligations.Please read these Terms carefully before using Resume
          Genius, because they affect your legal rights and obligations. By
          accessing or using the Website, you agree to these Terms.{" "}
          <span className="uppercase">
            {" "}
            If you do not agree with these Terms, please do not use the
            Website.PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SERVICE,
            BECAUSE THEY AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS. IF YOU DO NOT
            AGREE TO BE BOUND BY THESE TERMS, OR IF AT ANY TIME, THE TERMS ARE
            NO LONGER ACCEPTABLE TO YOU, PLEASE CEASE USE OF THE SERVICE
            IMMEDIATELY.
          </span>
        </p>
      </div>

      <div className="my-10 px-6 md:px-20 lg:px-36">
        <div>
          <h4 className="text-2xl font-bold mb-5 "> 1. User Eligibility</h4>
          <p className="text-[17px]">
            This is a general audience website for adults. Resume Genius is not
            intended for children under 16 years of age. By using this website
            you warrant that you have legal capacity to enter into the agreement
            set out in these Terms (i.e., that you are of sufficient age and
            mental capacity and are otherwise entitled to be legally bound in
            contract).
          </p>
        </div>

        <div className="my-10">
          <h4 className="text-2xl font-bold mb-5">2. Use of Services</h4>
          <p>
            <p className="mt-3">
              a. The Website offers a resume-building service that allows you to
              create a professional resume that highlights your skills and
              experience. You are responsible for ensuring that the information
              you provide is accurate and complete. This includes your contact
              information, education, work experience, skills, and any other
              relevant information.{" "}
            </p>
            <p className="mt-3 mb-1">
              {" "}
              b. You may not use the Website for any unlawful or prohibited
              purpose. This includes, but is not limited to, using the Website
              to:
            </p>
            <div className="ps-3">
              <p>1. Impersonate another person or entity.</p>
              <p>
                2. Post or transmit any illegal, harmful, threatening, abusive,
                harassing, defamatory, vulgar, obscene, or otherwise
                objectionable content.
              </p>
              <p>3. Disrupt or interfere with the operation of the Website.</p>
            </div>
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">3. Intellectual Property</h2>
          <p>
            <p className="mt-4">
              a. All content and design on this website, including but not
              limited to text, images, graphics, logos, and code, are the
              property of Resume Genius and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>

            <p className="mt-4">
              b. You may not copy, modify, distribute, or create derivative
              works from any of the content on this website without the express
              written permission of Resume Genius. Any unauthorized use of the
              content on this website may violate copyright, trademark, and
              other intellectual property laws.
            </p>
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 4. Privacy</h2>
          <p>
            Your privacy is important to us. For information about how Resume
            Genius collects, uses, and shares your information, please review
            our Privacy Policy. By using the Services, you agree you have read
            the{" "}
            <Link
              className="text-[#197685] cursor-pointer hover:underline font-bold"
              to="/privacyPolicy"
            >
              Privacy Policy
            </Link>{" "}
            {""}
            which explains how we use information that you submit to Provider
            and the choices you can make about the way this information is
            collected and used.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 5. User Content</h2>
          <p>
            As a Registered User you may upload, post, share, reframe, transmit
            or otherwise make available (“Make Available”) your User Content
            through the Service. “User Content” means, without limitation, your
            Account information, resume, career history, educational history,
            reviews, ratings, rankings, responses, videos, photos, pictures,
            audio, profile entries, posts, questions, career materials,
            testimonials, submissions, and/or any other information you provide
            on or through the Service or that we may create for you. When you
            create an Account or provide career information on or through the
            Service (including via forms available on the Site or by uploading a
            resume) you agree that you are solely responsible for the accuracy
            of your User Content. You agree that Provider may also offer
            information and other proprietary content that is of most interest
            to you.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 6. General</h2>

          <p className="mt-3">
            If any provision of these Terms shall be unlawful, void, or for any
            reason unenforceable, then that provision shall be deemed severable
            from this agreement and shall not affect the validity and
            enforceability of any remaining provisions. These Terms, together
            with the Privacy Policy, is the entire agreement between you and
            Resume Genius relating to the matters contained here and the site.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 7. Termination</h2>
          <p>
            Resume Genius reserves the unequivocal right to unilaterally
            terminate or suspend your access to the Website at any given time,
            without prior notice, in the event of substantial and repeated
            violations of these Terms and Conditions, with such violations
            including but not limited to, breach of intellectual property
            rights, fraudulent activities, or any other actions deemed
            detrimental to the proper functioning and integrity of the Website.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 8. Changes to Terms</h2>
          <p>
            a. Resume Genius reserves the unassailable right to proactively and
            autonomously modify, amend, or otherwise alter these Terms of
            Service at any juncture. You will be expeditiously notified via
            email and through prominent notifications on the Website of any such
            alterations or adjustments. Your continued use of the Website after
            the changes are meticulously and judiciously made, which includes
            but is not limited to textual revisions, supplemental clauses, or
            adjusted provisions, shall unequivocally and conclusively signify
            and denote your unwavering and full acceptance of the revised Terms
            and an unreserved commitment to abide by the updated terms and
            conditions herein.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 9. Updates to Terms</h2>
          <p>
            <p className="mb-6">
            Please note that these Terms may be revised and reissued, prospectively by posting updated terms on this page. You consent and agree to receive notices of updates of these Terms through our posting of updated terms on Resume Genius. You should visit this page regularly to review the current terms. Your continued use of Resume Genius will be deemed as irrevocable acceptance of any revisions adopted in accordance with these Terms.
            </p>

            <p>
              If you have any questions or concerns about these Terms, please
              contact us at{" "}
              <Link
                className="text-[#197685] cursor-pointer hover:underline font-bold"
                to="/contactUs"
              >
                {" "}
                contact us
              </Link>{" "}
              .
            </p>

            <p className="mb-20">
              Remember, it's important to customize the template to fit the
              specifics of your resume builder website and to seek legal advice
              or consult with a professional to ensure that your Terms of
              Service are legally sound and accurate.
            </p>
          </p>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default Terms;
