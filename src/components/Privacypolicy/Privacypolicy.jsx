import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Hooks/SectionTitle";

const Privacypolicy = () => {
  return (
    <div>
      <div className="breadcrumb-wrap md:mb-12 mb-9">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link className="text-[#efc778] hover:underline " to="/">
                Home
              </Link>
            </li>
            <li>
              <span>Privacy Policy</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* TODO  */}
      <SectionTitle
              subHeading={"Understanding Your Rights, Data Security, and More"}
              heading={"Navigating Our Privacy Policy"}
            ></SectionTitle>

      <div className="my-10 px-6 md:px-20 lg:px-36 text-justify">
        <p className=" mb-1">
          Published August 1, 2023. Effective as of November 1, 2023.{" "}
        </p>
        <p>
          Welcome to our Resume Genius website ("us", "we", or "our"). We are
          committed to protecting your personal information and your right to
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information. By using our resume building services,
          you consent to the practices described in this Privacy Policy.
        </p>
        <p className="mt-2">
          By visiting the Site, you agree that your information will be handled
          as described in this Policy. Your use of this Site is subject to this
          Policy and our{" "}
          <Link
            to="/terms"
            className="text-[#197685] cursor-pointer hover:underline font-bold"
          >
            Terms of Use
          </Link>{" "}
          Terms of Use are incorporated by reference into this Policy.
        </p>
      </div>

      {/* <div className="my-10 flex-grow px-6 md:px-20 lg:px-36 ">
        <div>
          <h2 className="text-4xl font-semibold mb-3">Full Privacy Policy</h2>
          <p>Last Updated: November 01, 2023</p>
        </div>
      </div> */}

      <div className="my-10 px-6 md:px-20 lg:px-36 text-justify">
        <div>
          <h4 className="text-2xl font-bold mb-5">1. Introduction</h4>
          <p>
            Welcome to our Resume Genius website ("us", "we", or "our"). We are
            committed to protecting your personal information and your right to
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information. By using our resume building
            services, you consent to the practices described in this Privacy
            Policy.
          </p>
        </div>
        <div className="my-10">
          <h4 className="text-2xl font-bold mb-5">
            2. Information We Collect About You
          </h4>
          <p>
            <span className=" font-bold ">Resume Information:</span> We collect
            the information you provide when using our resume builder, including
            personal details, work experience, education, skills, and any other
            content you include in your resume.{" "}
          </p>

          <p className="mt-4">
            <span className=" font-bold ">Account Information:</span> If you
            create an account, we collect your email address, password, and
            other account-related information.
          </p>

          <p className="mt-4">
            <span className=" font-bold">User Interaction Information:</span> We
            may automatically collect certain information when you interact with
            our website, including IP address, browser type, device type,
            operating system, and usage patterns. To the extent permissible by
            law of the country of your residence, you agree that we can share
            your interaction information with, or obtain information about your
            interaction from, analytics providers, advertising partners,
            third-party partners, and social media sites until you withdraw your
            consent for the purpose of providing or improving our services.
          </p>
          <p className="mt-4">
            <span className=" font-bold"> Mobile Information :</span> By
            agreeing to this Policy you consent that we may collect additional
            information from you if you access our Site through a mobile device
            (e.g. your unique device identifier, device’s operating system,
            mobile carrier, location or GPS/geo-location and mobile number).
          </p>
          <p className="mt-4">
            <span className=" font-bold">Third party log-in: </span> We may
            collect some basic information when you access the Site with
            third-party login credentials such as your name, user name, and your
            email address.
          </p>
          <p className="mt-4">
            <span className=" font-bold">
              Browser Extensions Privacy Notice and Information We Collect:{" "}
            </span>{" "}
            Provider offers certain browser extensions, including but not
            limited to the “Apply Tool”, that are all available in certain web
            browsers such as Google Chrome. When you download a browser
            extension, we automatically collect certain information from your
            device or web browser. We automatically collect information from
            location storage associated with your web browser, including your
            browsing behavior for career searching activity. We can also
            automatically record your interactions with certain webpages by
            accessing local storage associated with your web browser.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            3. How We User Your Information
          </h2>
          <p>
            We may share your information under the following circumstances:
            Resume Sharing: You can choose to share your resume with potential
            employers or third parties. We are not responsible for the privacy
            practices of these parties. Service Providers: We may share your
            information with third-party service providers who help us operate,
            provide, and improve our services. Legal Obligations: We may
            disclose your information in response to legal requests, court
            orders, or legal processes.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            4. How We Disclose Your Information
          </h2>
          <p>
            We may share your information under the following circumstances:{" "}
            <br />
            <p className="my-2">
              <span className="text-lg font-bold">Resume Sharing:</span> You
              have the option to share your meticulously crafted resume with
              potential employers or other third parties who may express
              interest in your qualifications. It's important to note that, in
              these instances, we cannot assume responsibility for the data
              privacy practices employed by these external parties.{" "}
            </p>
            <p className="my-2">
              <span className="text-lg font-bold">Service Providers:</span> To
              ensure the seamless operation, delivery, and continual enhancement
              of our services, we may share your information with trusted
              third-party service providers. These partners play a crucial role
              in helping us maintain the quality and efficiency of the services
              we offer.
            </p>{" "}
            <p className="my-2">
              <span className="text-lg font-bold ">Legal Obligations:</span>In
              certain circumstances, we may be required to disclose your
              information in response to legal requests, court orders, or other
              legal processes. We take these obligations seriously and will only
              disclose information as mandated by applicable laws and
              regulations.
            </p>
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            5. Accessing, Reviewing, and Changing Your Personal Information
          </h2>
          <p>
            For the convenience and control of our valued registered users, we
            offer the capability to seamlessly access, review, and modify your
            personal information at your discretion. This functionality is
            readily accessible through your individual accounts on our Site,
            where you can navigate to the dedicated sections under the "Profile"
            tabs. We highly recommend that you regularly engage with these
            features to ensure the accuracy and currency of your information. If
            any of your details undergo changes or become outdated, please take
            prompt action to update them, thereby ensuring that the information
            we hold remains current and relevant to your needs.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            6. Your Choices and Data Control
          </h2>
          <p>
            We believe in giving you complete control over your information and
            privacy. Within your account, you have the power to edit or delete
            your resume at any time, ensuring it always reflects your current
            status and preferences. Additionally, managing your email
            preferences is a breeze – simply follow the user-friendly
            instructions included in our promotional emails, and you can opt out
            whenever you choose.
          </p>
          <p>
            We respect your rights with regards to your personal data and are
            dedicated to complying with the latest data protection laws and
            regulations. This means you have the authority to exercise your
            rights concerning your personal information, as granted by
            applicable laws.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            7. Ensuring Your Information's Security
          </h2>
          <p>
            At Resume Genius, safeguarding your information is of paramount
            importance to us. We diligently implement rigorous security measures
            to protect your valuable data from any unauthorized access or
            disclosure. However, it's essential to recognize that no method of
            data transmission over the internet or electronic storage can be
            considered entirely impervious to potential threats.
          </p>
          <p>
            We are committed to maintaining the highest standards of security to
            ensure the confidentiality and integrity of your information. Rest
            assured that we continuously adapt and enhance our security
            protocols to stay ahead of emerging challenges and provide you with
            the peace of mind you deserve.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 8. Children's Privacy</h2>
          <p>
            Protecting the privacy of children is a fundamental concern for us.
            Our services are designed and intended for users who are 16 years of
            age or older. We have a strict policy of not knowingly collecting
            personal information from individuals under the age of 16. If you
            are a parent or guardian and believe that your child has provided us
            with their personal information, please contact us immediately so
            that we can take appropriate action to address the situation.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            9. Changes to This Policy
          </h2>
          <p>
            At Resume Genius, we are dedicated to maintaining the highest
            standards of transparency and clarity. As our services evolve to
            better serve your needs, it may become necessary to update our
            Privacy Policy to reflect these changes accurately. Rest assured
            that any modifications we make will always be made with your best
            interests in mind.
          </p>
          <p>
            To keep you informed and ensure complete transparency, we will
            notify you of any changes to our Privacy Policy by posting the
            updated policy on our website. We encourage you to review our
            Privacy Policy regularly to stay informed about how we are working
            to protect your privacy and data.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5"> 10. Information Security</h2>
          <p>
            We maintain appropriate technical, physical, and administrative
            security measures designed to protect the security of your
            information against loss, misuse, unauthorized or accidental access,
            disclosure, copying, use or alteration. However, no method of
            transmission over the Internet or method of electronic storage is
            totally secure. Therefore, we cannot guarantee its absolute
            security. If you would like to contact our Data Protection Officer,
            please send an email to{" "}
            <Link to="info.webbattalion@gmail.com">
              <span className="text-[#197685] cursor-pointer hover:underline font-bold">
                info.webbattalion@gmail.com
              </span>
            </Link>{" "}
            .
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            11. Notification Regarding Review and Updates
          </h2>
          <p>
            From time to time and at least once every twelve (12) months we
            review this Privacy Policy and we may choose to update its terms.
            The Privacy Policy posted at any time or from time to time via the
            Site shall be deemed to be the Privacy Policy then in effect. You
            agree that we can notify you about material changes in the way we
            treat your Information by placing a notice on the Site. You should
            check the Site frequently for updates. In addition, we have provided
            the Privacy Policy Highlights section to offer a summary of the main
            points of our Full Privacy Policy for your convenience. In the event
            of a conflict between the Privacy Policy Highlights and the Full
            Privacy Policy, the Full Privacy Policy will control.
          </p>
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            12. Information You Share on the Site
          </h2>
          <p>
            If you participate in Provider services (e.g., resume posting,
            profile creation, Job Alerts, Digital Resume) that permit you or
            Provider on your behalf to post your Information on Provider’s
            searchable databases or third-party sites (e.g., websites, bulletin
            boards, personal URLs) by posting information or content (such as by
            posting photos, creating a Digital Resume or participating in online
            forums or communities), or when you interact with our Site through
            social media sites, plug-ins or other sites or applications,
            depending upon your privacy settings, the information posted will be
            publicly available and searchable by individuals. Provider reserves
            the right to aggregate and /or share that information with third
            parties to perform our Service. We may not be able to prevent the
            further use of this Information. You will be able to set your
            privacy preferences and determine how Public or Private you prefer
            your account, if you have any questions make sure to contact us.
            Please also remember to refer to those third-party sites’ privacy
            policies and terms of use to learn more about their privacy
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;
