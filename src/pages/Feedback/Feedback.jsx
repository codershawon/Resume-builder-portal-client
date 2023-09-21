import "react-toastify/dist/ReactToastify.css";  // Import CSS for toast notifications
import "./Feedback.css";  // Import custom CSS for this component
import React, { useContext, useEffect, useState } from "react";  // Import React and necessary hooks
import { useForm, Controller } from "react-hook-form";  // Import form handling hooks
import { useDispatch, useSelector } from 'react-redux';  // Import Redux hooks
import { AuthContext } from "../../Providers/AuthProvider";  // Import AuthContext
import { FaStar } from "react-icons/fa";  // Import star icon from FontAwesome
import { ToastContainer, toast } from "react-toastify";  // Import ToastContainer for toast notifications
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toast notifications
import { setHover, setRating, setReviewSubmitted, setReviewText } from "../../redux/features/feedback/feedbackSlice";  // Import actions from feedbackSlice

const Feedback = () => {
  const dispatch = useDispatch();  // Initialize dispatch function to dispatch actions
  const { rating, hover, isReviewSubmitted } = useSelector((state) => state.feedback);  // Select state properties from the Redux store
  const { user } = useContext(AuthContext);  // Get user info from the AuthContext
  const { register, control, handleSubmit, setValue } = useForm();  // Initialize form handling functions
  const [profile, setProfile] = useState([]);  // Initialize profile state to hold user data

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
      status: "pending"
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
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
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

