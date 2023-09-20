import "react-toastify/dist/ReactToastify.css";  
import "./Feedback.css";  
import React, { useContext, useEffect, useState } from "react";  
import { useForm, Controller } from "react-hook-form"; 
import { useDispatch, useSelector } from 'react-redux';  
import { AuthContext } from "../../Providers/AuthProvider"; 
import { FaStar } from "react-icons/fa";  
import { ToastContainer, toast } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css'; 
import { setHover, setRating, setReviewSubmitted, setReviewText } from "../../redux/features/feedback/feedbackSlice";  // Import actions from feedbackSlice

const Feedback = () => {
  const dispatch = useDispatch();  
  const { rating, hover, isReviewSubmitted } = useSelector((state) => state.feedback);  
  const { user } = useContext(AuthContext);  
  const { register, control, handleSubmit, setValue } = useForm();  
  const [profile, setProfile] = useState([]);  

  // Function to fetch user data from the database based on email
  const fetchUserDataFromDatabase = async (email) => {
    try {
      const response = await fetch(`https://resume-builder-portal-server.vercel.app/users/${email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('Failed to fetch user data');
    }
  };
  
  useEffect(() => {

    if (user?.email) {
      fetchUserDataFromDatabase(user.email)
        .then((data) => {
          setProfile(data);
        })
        .catch((error) => console.error('Error loading user data:', error));
    }
  }, [user?.email]);

  // Function to handle rating change
  const handleRatingChange = (value) => {
    dispatch(setRating(value)); 
  };

  // Function to handle form submission
  const onSubmit = (data) => {
    if (isReviewSubmitted) {
      return;
    }

    const { reviewText } = data;

    // Prepare the data to be posted
    const postData = {
      rating,
      reviewText,
      image: profile?.photoURL || user?.photoURL,
      email: user?.email,
      name: profile?.name,
      status:"pending"
    };

    // Send a POST request to submit the feedback
    fetch('https://resume-builder-portal-server.vercel.app/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to submit review and rating.');
        }
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Review submitted successfully!');  // Show success toast
          dispatch(setReviewText(''));  // Reset the review text
          dispatch(setReviewSubmitted(true));  // Set review as submitted in the Redux store
        } else if (data.message) {
          toast.error('User already exists. Cannot submit multiple reviews.');  // Show error toast
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Return the JSX for the component
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Feedback Form</h1>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Your overall rating</h2>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i} className="flex items-center mr-3">
                  <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="radio"
                        value={ratingValue}
                        onChange={() => {
                          field.onChange(ratingValue);
                          handleRatingChange(ratingValue);
                        }}
                      />
                    )}
                  />
                  <FaStar
                    className={`ml-1 text-2xl ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Your review</h2>
          <textarea
            className="w-full h-32 md:h-40 lg:h-48 px-3 py-2 bg-gray-200 border border-gray-300 rounded-lg resize-none"
            {...register("reviewText")}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className={`w-full py-3 rounded-lg ${isReviewSubmitted ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white transition duration-300`}
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default Feedback;