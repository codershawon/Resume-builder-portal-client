import "react-toastify/dist/ReactToastify.css";
import "./Feedback.css";
import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Feedback = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const { register,control, handleSubmit, setValue } = useForm();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://resume-builder-portal-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRatingChange = (value) => {
    setValue("rating", value);
  };

  const onSubmit = (data) => {
    if (data.isReviewSubmitted) {
      return;
    }

    const rating = data.rating;
    const reviewText = data.reviewText;
    const image = profile?.photoURL || user?.photoURL;
    const email = user?.email;
    const name = profile?.name;
    const postData = {
      rating,
      reviewText,
      image,
      email,
      name
    };

    fetch("https://resume-builder-portal-server.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
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
          toast.success("Review submitted successfully!");
        } else if (data.message) {
          toast.error("User already exists. Cannot submit multiple reviews.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md"
      >
        <div className="px-4 py-8 bg-white rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg mb-3">Your overall rating</h1>
          <div className="flex mb-4">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i} className="flex items-center">
                  <Controller
                    name="rating"
                    control={control}
                    render={() => (
                      <input
                        type="radio"
                        value={ratingValue}
                        onClick={() => handleRatingChange(ratingValue)}
                      />
                    )}
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
            {...register("reviewText")}
          ></textarea>
          <div>
            <button
              className="btn my-btn w-full"
              disabled={isReviewSubmitted}
              type="submit"
            >
              {isReviewSubmitted ? "Submitting..." : "Submit"}
            </button>
            {isReviewSubmitted && (
              <p className="text-sm text-gray-500 mt-2">
                Review submitted. Redirecting...
              </p>
            )}
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Feedback;
