import "swiper/css";
import "swiper/css/navigation";
import "./BestResume.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../../Hooks/SectionTitle";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";

import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";


const BestResume = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["bestResume"]);
  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const [activeButton, setActiveButton] = useState("all");
  const [resumeCollections, setResumeCollections] = useState([]);
  const [allResume, setResume] = useState(resumeCollections);

  useEffect(() => {
    fetch("https://resume-builder-portal-server.vercel.app/resume")
      .then((res) => res.json())
      .then((data) => {
        setResumeCollections(data);
        setResume(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filterItem = (type) => {
    const filteredResume = resumeCollections.filter((resume) => {
      return resume.type === type;
    });
    setResume(filteredResume);
  };

  const handleAddToCart = (resume) => {
    // console.log(resume);
    if (user && user.email) {
      const cartsItem = {
        profileId: resume._id,
        profile: resume.profile,
        template: resume.template,
        price: resume.price,
        email: user.email,
      };
      fetch("https://resume-builder-portal-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartsItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Selected resume added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to purchase the package",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="rgContainer mt-28">
      <div data-aos="fade-down"
        data-aos-anchor-placement="center-bottom">
        <SectionTitle
          subHeading={`${t('bestResume:subHeading')}`}
          heading={`${t('bestResume:heading')}`}
        ></SectionTitle>
        {/* <div className='text-center font-bold text-3xl sm:text-5xl mt-10'>
                <h2>Our best resume</h2>
                <h2>templates available</h2>
            </div> */}

        <div className="text-center my-8">
          <button
            onClick={() => {
              setResume(resumeCollections);
              setActiveButton("all");
            }}
            className={`shadow-md px-3 py-2 hover:bg-[#42C3E4] hover:text-white rounded-2xl font-semibold ${activeButton === "all" ? "active-button" : ""
              }`}
          >
            {t('bestResume:all')}
          </button>
          <button
            onClick={() => {
              filterItem("photo");
              setActiveButton("photo");
            }}
            className={`shadow-md px-3 py-2 hover:bg-[#42C3E4] hover:text-white rounded-2xl font-semibold mx-3 ${activeButton === "photo" ? "active-button" : ""
              }`}
          >
            {t('bestResume:withPhoto')}
          </button>
          <button
            onClick={() => {
              filterItem("noPhoto");
              setActiveButton("noPhoto");
            }}
            className={`shadow-md px-3 py-2 hover:bg-[#42C3E4] hover:text-white rounded-2xl font-semibold mx-3 ${activeButton === "noPhoto" ? "active-button" : ""
              }`}
          >
            {t('bestResume:noPhoto')}
          </button>
        </div>
      </div>



      <>
        <Swiper data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          slidesPerView={1}
          spaceBetween={15}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          speed={5000}
          loop={true}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            575: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >

          {allResume.map((resume) => (
            <SwiperSlide className="" key={resume._id}>
              <div className="slider-content">
                <LazyLoad height={297} offset={100}>
                  <img className="" src={resume.image} alt="resume" />
                </LazyLoad>
                {/* <img className="" src={resume.image} alt="resume" /> */}
                <Link
                  to={
                    parseFloat(resume.price) === 0
                      ? `/resumeBuilder/${resume._id}`
                      : `/dashboard/my-template/${resume._id}`
                  }
                >
                  {/* Render the button conditionally */}
                  {parseFloat(resume.price) > 0 ? (
                    <button
                      onClick={() => handleAddToCart(resume)}
                      className="useButton"
                    >
                      {t('bestResume:useThisTemplate')}
                      <span className="ml-2 text-sm font-semibold">
                        ${parseFloat(resume.price)}
                      </span>
                    </button>
                  ) : (
                    <Link
                      className="useButton"
                      to={`/templates/${resume.name}`}
                    >
                      {t('bestResume:useThisTemplate')}
                    </Link>
                  )}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default BestResume;


