import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import "./ResumeTemplate.css"
const ResumeTemplate = () => {
    const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };
  const handleReviewSubmit = () => {
    // const data = {
    //   rating,
    //   reviewText,
    // };
    // fetch(`https://school-booking-facilities-server.vercel.app/myCollege/${collegeId}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       throw new Error("Failed to submit review and rating.");
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Review submitted successfully!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Show an error message to the user
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Failed to submit review and rating.",
    //     });
    //   });
  };
    return (
        <div className="mt-10">
        <h1 className="font-bold text-lg">Your overall rating</h1>
        <div className="flex">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRatingChange(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "gray"
                  }
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <h1 className="font-bold text-lg mt-5">Your review</h1>
        <textarea
          className="bg-gray-200 border-2 w-full lg:w-[500px] h-full lg:h-[250px] border-gray-400 rounded-lg"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary mt-10 w-full lg:w-96 bg-[#36d7b7] text-black"
          onClick={handleReviewSubmit}
        >
          Submit
        </button>
      </div>
    );
};

export default ResumeTemplate;