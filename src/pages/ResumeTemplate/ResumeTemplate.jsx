import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import "./ResumeTemplate.css";

const ResumeTemplate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false); // New state variable

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (isReviewSubmitted) {
      return; // Prevent submitting multiple times
    }

    const form = e.target;
    const rating = form.rating.value;
    const reviewText = form.reviewText.value;
    const data = {
      rating,
      reviewText,
    };

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to submit review and rating.");
        }
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review submitted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsReviewSubmitted(true); // Set the state to indicate review is submitted
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        // Show an error message to the user
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit review and rating.",
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
        <div className="mt-10 w-full p-5 lg:px-72">
          <h1 className="font-bold text-lg">Your overall rating</h1>
          <div className="flex">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
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
            className="bg-gray-200 border-2 w-full md:w-96 lg:w-96 h-full border-gray-400 rounded-lg p-2"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            name="reviewText"
          ></textarea>
          <div>
            <button
              className="btn my-btn mt-10 w-full md:w-96 lg:w-96"
              disabled={isReviewSubmitted} // Disable the button if review is submitted
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeTemplate;

