import "./PremiumTemplates.css";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import icon from "../../../assets/premium-badge.png";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import { useEffect } from "react";
import { useState } from "react";

const PremiumTemplates = () => {
  const [resumeCollections, setResumeCollections] = useState([]);
  const { user } = useAuth();
  const [, refetch] = useCart();
 console.log(resumeCollections);

  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    fetch("https://resume-builder-portal-server.vercel.app/resume")
      .then((res) => res.json())
      .then((data) => {
        setResumeCollections(data);
      })
      .catch((error) => console.error(error));
  }, []);
//   console.log("resume", resumeCollections);

  const premiumResumes = resumeCollections.filter((resume) => resume.price > 0);

  // console.log('premiumResumes', premiumResumes);

  const handleAddToCart = (resume) => {
    console.log(resume);
    if (user && user.email) {
      const cartsItem = {
        profileId: resume._id,
        profile: resume.profile,
        name: resume.name,
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
    <div className="my-20">
      <h2 className="font-bold text-3xl md:text-5xl">
        {" "}
        <span className="text-[#42C3E4]">Professional</span> Resume Templates
      </h2>
      <p className="text-xl">
        Professional templates mean business. Candidates applying for senior
        positions in construction, sales, information technology, and
        pharmaceutical industries will find a great selection of premium and
        free resume templates in this collection.
      </p>

      <div className="grid gird-cols sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 my-10">
  {premiumResumes.map((resume, index) => (
    <div key={index} className="p-5 resumeContents bg-slate-100">
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full">
          <Link to={`/dashboard/my-template/${resume.name}`}>
            <button
              onClick={() => handleAddToCart(resume)}
              className="my-btn w-full text-center"
            >
              Use this template
              {parseFloat(resume.price) > 0 && (
                <span className="ml-2 text-sm font-semibold">
                  ${parseFloat(resume.price).toFixed(2)}
                </span>
              )}
            </button>
          </Link>
        </div>
        <div className="absolute bottom-[95%] left-[50%] translate-x-[-50%]">
          <div className=" relative w-fit">
            <img className="w-20" src={icon} alt="" />
          </div>
        </div>
        <img
          className="w-full max-h-[480px]"
          src={resume.image}
          alt={`Premium Resume ${index + 1}`}
        />
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default PremiumTemplates;
