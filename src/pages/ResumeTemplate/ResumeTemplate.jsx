import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./ResumeTemplate.css";
import { AuthContext } from "../../Providers/AuthProvider";

const ResumeTemplate = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (isReviewSubmitted) {
      return;
    }

    const form = e.target;
    const rating = form.rating.value;
    const reviewText = form.reviewText.value;
    const image = user?.photoURL;
    const email = user?.email;
    const data = {
      rating,
      reviewText,
      image,
      email,
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
          setIsReviewSubmitted(true);
          form.reset();
          toast.success("Review submitted successfully!");
        } else if (data.message) {
          toast.error("User already exists. Cannot submit multiple reviews.");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleReviewSubmit} className="w-full max-w-md">
        <div className="px-4 py-8 bg-white rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg mb-3">Your overall rating</h1>
          <div className="flex mb-4">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => handleRatingChange(ratingValue)}
                  />
                  <FaStar
                    className="star ml-1"
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
          <h1 className="font-bold text-lg mt-3 mb-2">Your review</h1>
          <textarea
            className="bg-gray-200 border-2 w-full h-32 md:h-40 lg:h-48 border-gray-400 rounded-lg p-2 mb-3"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            name="reviewText"
          ></textarea>
          <div>
            <button
              className="btn my-btn w-full"
            >
              Submit
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ResumeTemplate;

