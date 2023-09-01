import React from "react";
import { Link } from "react-router-dom";

const Faquesction = () => {
  return (
    <div className="mx-8 flex-grow px-2 md:px-20 lg:px-36">
      <div className="my-10">
        <div>
          <h2 className="text-4xl font-samibold mb-3">Full Resume</h2>
          <p>Answers to commonly asked questions about Resume Format</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200">
        <div className="collapse-title text-xl font-medium mb-2">
          What is Resume Page, and why should I use it?
        </div>
        <hr />
        <div className="collapse-content">
          <p>
            Resume Page is an online tool for resume digitization and resume
            personalization. Make yourself stand out from the crowd of and
            impress your future employers. Our resume service will guide you to
            create a targeted and succinct resume that tells your story in a
            unique yet professional manner, enhancing your chances of success.
            Our resume services will ensure your resume meets industry standards
            while retaining your personality. It is with this combo of
            uniqueness and polish that you are chosen out of a pile of
            thousands. With Resume Page, present yourself in the best light.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 my-2">
        <div className="collapse-title text-xl font-medium">
          What does Resume Page provide you?
        </div>

        <div className="collapse-content">
          <p>
            You can find a comprehensive list of services here (link to products
            & services). We offer a wide range of servicestailored to fit the
            needs of recent graduates and experienced professionals.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How do I change my template?
        </div>
        <div className="collapse-content">
          <p>
            A preview of the document is displayed in the template you selected
            in the editor. At the bottom of the example, you can select another
            template in the menu bar by clicking on the 'Template' icon. Colour,
            font 'Aa', font size 'tT' and line spacing '↕' can also be changed
            here.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How can I edit my resume or cover letter?
        </div>
        <div className="collapse-content">
          <p>
            Select the document you wish to edit under the ‘Resumes’ or ‘Cover
            letters’ tab and then click ‘Edit’. You can edit the content in the
            editor. Based on the data you have entered, a preview of the
            document will be shown immediately. The font 'Aa', font size 'tT',
            line spacing '↕', colour and template can be changed in the menu bar
            at the bottom of the preview.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How do I change the status of an application?
        </div>
        <div className="collapse-content">
          <p>
            You can change the status of an application by dragging it to the
            appropriate column under the 'Applications' tab.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How do I cancel my subscription?
        </div>
        <div className="collapse-content">
          <p>
            Log in and click on your profile icon and go to 'Settings'. Use the
            'Cancellation' button to cancel your subscription. You will
            automatically receive a confirmation by email.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How do I import a resume?
        </div>
        <div className="collapse-content">
          <p>
            You can import an existing resume by using the 'Import' button in
            the top right corner of the editor. Select a resume (PDF or Word)
            and the file will automatically be copied into the fields. Filled
            out fields will automatically be overwritten with the content of the
            imported document. The fields must be checked afterwards for
            completeness and correctness.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          Where can I view my receipt?
        </div>
        <div className="collapse-content">
          <p>
            Login and click on your profile icon to go to 'Settings'. Click on
            'Payment History' to view your payment receipts. The receipt also
            serves as your invoice.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How do I delete my data?
        </div>
        <div className="collapse-content">
          <p>
            Login and click on the profile icon to go to 'Settings'. Click on
            'Delete account' to permanently delete your account. If you have not
            activated an account and only entered your details, these will
            automatically be deleted within 30 days.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How can I download my resume or cover letter?
        </div>
        <div className="collapse-content">
          <p>
            How can I download my resume or cover letter? Click on ‘download’ in
            the editor or in your account under the tab ‘Resumes’ or ‘Cover
            letters’. In case you do not yet have a paid account, or you have
            not yet logged in, you will need to first follow all the steps on
            the screen. You will then be able to download the document as a pdf.
            At this time, Word is not available.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How can I add a page break?
        </div>
        <div className="collapse-content">
          <p>
            Open the item under which you want to add a page break. Then click
            on the three dots, select 'Add page break' and drag it to the
            desired position within the item.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How can I sort the sections on my resume?
        </div>
        <div className="collapse-content">
          <p>
            You can change the order of the (sub)items by clicking on the six
            dots to the left of the item in question and then dragging it. You
            can move an item to the left or right column by opening the item,
            clicking on the button with the three dots and selecting the option
            'Move to left/right column'.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How do I change my job search?
        </div>
        <div className="collapse-content">
          <p>
            You can change your search by entering the desired function, city
            and radius under the 'Vacancies' tab and then clicking on 'Search'.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How can I delete an item?
        </div>
        <div className="collapse-content">
          <p>
            If you want to delete an entire section, you have to select the
            section and click on the three dots after which the option 'Delete
            section' will appear. You can undo the deleting of sections with the
            arrows on the top right corner of the editor.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
          How can I add or remove a photo?
        </div>
        <div className="collapse-content">
          <p>
            You can upload a photo in the designated block in the top left
            corner of the editor. You can drag the photo, zoom in or out and
            rotate it to the desired position. Adding a photo is not mandatory
            and you can always change or delete it afterwards.
          </p>
        </div>
      </div>

      <div
        className=" text-center py-10 my-12"
        style={{
          backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)",
        }}
      >
        <h1 className=" text-3xl flex justify-center items-center  font-bold text-gray-700 py-50">
          We’ll help you write every kind of cover letter
        </h1>
      </div>

      <div>
        <div className="my-10">
          <h2 className="text-4xl font-samibold mb-3">Full Cover Letter</h2>
          <p>Answers to commonly asked questions about Cover Letter Format</p>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium ">
            What is a cover letter template?
          </div>
          <hr />
          <div className="collapse-content">
            <p>
              Cover letter templates help you write your own cover letter, by
              doing the following: Providing a professional look and layout for
              your cover letter. Providing an example of content you can use to
              create your letter. Serving as a “blueprint” for your cover
              letter.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium">
            How do I use a cover letter template?
          </div>

          <div className="collapse-content">
            <p>
              Just choose a cover letter template, or use our Cover Letter
              Builder, which will guide you through each section. Throughout the
              process, we’ll suggest phrases and provide tips that will help
              polish your letter. You can edit, save and download as many cover
              letters as you like.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium">
            What is a cover letter example?
          </div>

          <div className="collapse-content">
            <p>
              Our cover letter examples show you how to write cover letters for
              a variety of situations, from applying to a job to networking with
              a prospective employer. Use these examples to help format and
              create your own letter.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium">
            How do I use a cover letter example?
          </div>

          <div className="collapse-content">
            <p>
              To get the most out of our examples, follow these tips: Think
              about the type of job you want, your skills and your work
              experience. Think about how you want to present your best
              attributes in your letter. Pick one of our cover letter examples
              that best fits what you want to write. Use the content in our
              example as a foundation for writing your own cover letter.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium">
            What is a cover letter format?
          </div>

          <div className="collapse-content">
            <p>
              The cover letter format is the layout of your letter, or how it
              will look to the reader — everything from colors and graphic
              elements to its fonts, line spacing and margins. Our examples and
              templates are perfectly formatted for any use.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium">
            How long does it take to write a cover letter in your builder?
          </div>

          <div className="collapse-content">
            <p>
              How long does it take to write a cover letter in your builder?
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus bg-base-200 mb-2">
          <div className="collapse-title text-xl font-medium">
            Do I need a cover letter?
          </div>

          <div className="collapse-content">
            <p>
              Unless the job application specifically requests you not to send a
              cover letter, it’s good practice to send one. When written
              correctly, a good cover letter can be a strong companion to your
              resume, and be a critical factor in getting you a job interview.
              The best cover letters give you the chance to introduce yourself
              and your skills, explain why you’re a good fit for the job
              opportunity, and provide more depth and context on your
              achievements.
            </p>
          </div>
        </div>
      </div>

      
          
      <div
        className=" text-center py-6 my-8"
        style={{
          backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)",
        }}
      >
        <h1 className=" text-3xl flex justify-center items-center  font-bold text-gray-700 py-50">
          Contact Us
        </h1>
      </div>
       

      <div className="my-10 ms-4">
        <p className="text-xl">
          Didn’t find the answer you were looking for? Our customer care support
          team is ready to help you!
        </p>
        <br />

        <p className="text-xl">
          Visit our{" "}
          <Link
            className="text-[#197685] cursor-pointer hover:underline font-bold"
            to="/contactUs"
          >
            Contact Us
          </Link>{" "}
          page if you want to chat or send an email.
        </p>
      </div>
    </div>
  );
};

export default Faquesction;
