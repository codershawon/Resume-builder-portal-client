import React, { useRef } from "react";
import { FaMobile } from "react-icons/fa";
import { FaLocationDot, FaMessage, FaRegMessage } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import contactUsAnimation from "./contactUsAnimation.json";
import Lottie from "lottie-react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// import 'aos/dist/aos.css'

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text) {
            // form.reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Massage has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          }
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact section rgContainer mb-20">
        <div className="mt-10 ">
          <h3 className="contact__title">
            Contact Us | <span className="text-[#0dcaf0]">Resume</span>{" "}
            <span className="text-[#197685]">Crafters</span>
          </h3>
          <p className="">
            Exceptional resume guidance and top-tier customer support. <br /> We
            take great pride in assisting you through every stage of the
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
          <div className="">
            <Lottie
              className="w-full lg:h-[600px]"
              animationData={contactUsAnimation}
            />
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="form__input-group" data-aos="fade-left">
              <div className="form__input-div">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="form__control"
                  required
                />
              </div>

              <div className="form__input-div">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="form__control"
                  required
                />
              </div>

              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Your Subject"
                  name="user_subject"
                  className="form__control"
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                placeholder="Your Message"
                name="message"
                className="form__control textarea"
                required></textarea>
            </div>

            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
              className="flex justify-center items-center my-btn"
              type="submit"
              value="Send">
              Send Message
              <FiSend />
            </button>
          </form>
        </div>

        <div className="w-full h-32 bg-gradient-to-b from-[#197695] to-[#197685] rounded text-white flex justify-around  items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex justify-center items-center border-2 border-blue-500 rounded-full">
              <div className="w-14 h-14 flex justify-center items-center mx-auto border border-blue-500 rounded-full">
                <FaLocationDot className="text-3xl  " />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl pb-1">Location</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex justify-center items-center border-2 border-blue-500 rounded-full">
              <div className="w-14 h-14 flex justify-center items-center mx-auto border border-blue-500 rounded-full">
                <FaMessage className="text-3xl  " />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl pb-1">Email</h3>
              <p>info.webbattalion@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex justify-center items-center border-2 border-blue-500 rounded-full">
              <div className="w-14 h-14 flex justify-center items-center mx-auto border border-blue-500 rounded-full">
                <FaMobile className="text-3xl  " />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl pb-1">Contact</h3>
              <p>016****4772</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
