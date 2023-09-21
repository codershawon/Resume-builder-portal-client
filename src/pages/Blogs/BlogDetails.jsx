import React, { useState, useEffect } from "react";
import { FaCalendar, FaCalendarCheck, FaStopwatch } from "react-icons/fa";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const blogDetails = useLoaderData();
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(blogDetails.comments); // Initialize with existing comments
  console.log("User:", user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  console.log("user", user);
  const {
    _id,
    authorUrl,
    bloggerImage,
    bloggerName,
    bloggerTitle,
    date,
    readingTime,
    blogTitle,
    blogDescription,
    imageUrl,
  } = blogDetails;

  const addComment = (e) => {
    e.preventDefault();

    const newComment = {
      text: commentText,
      name: user.displayName,
      photoUrl: user.photoURL,
    };

    fetch(`https://resume-builder-portal-server.vercel.app/blogs/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          // Comment added successfully
          // Update the local state with the new comment
          setComments([...comments, newComment]);
          alert('Successfully added comment');
          console.log('Successfully added comment');
        } else {
          alert('Error adding comment');
          console.error('Error adding comment');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });

    setCommentText('');
  };

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }


  return (
    <div className="w-[70%] mx-auto">
      <div>
        <img
          src={imageUrl}
          className="h-[200px] md:h-[300px] lg:h-[430px] w-full mb-7 lg:mb-8 mt-12"
          alt="Blog image"
        />
        <p className="md:text-3xl py-2 font-semibold">{blogTitle}</p>
        <div className="flex justify-between items-center md:mt-5 mt-4">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 ">
              {authorUrl ? <img src={authorUrl} className='rounded-full w-12 h-12' alt="Author Image" /> : ''}

              <div>
                <p className="font-medium text-lg">{bloggerName}</p>
                <p className="font-medium text-base text-gray-600 pb-3">{bloggerTitle}</p>
              </div>
            </div>
            <p className=""> {date}</p>
          </div>
          <div className="flex gap-1 items-center text-[#197685]">
            <FaStopwatch className="text-[#197685]"></FaStopwatch> {readingTime}
          </div>
        </div>

        <p className="pt-5 pb-12 text-gray-700">{blogDescription}</p>
      </div>
      {/* comment section */}


      <div className="mt-8 mb-20 border p-5">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <form className="mb-4" onSubmit={addComment} >
          <textarea
            rows="2"
            name="comments"
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border rounded-md resize-none focus:outline-[#197685] focus:border-[#197685]"
            style={{ border: "1px solid #ccc" }}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-[#197685]  btn btn-sm hover:bg-white hover:text-[#197685] hover:border-[#197685]  hover:shadow-xl text-white h-10 px-4 rounded"
          >
            post
          </button>
        </form>
        <div className="rounded-lg">
          {comments.map((comment, index) => (
            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-xl">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={comment.photoUrl} alt={comment.name} />
                  </div>
                </div>
                <div className="chat-header">{comment.name}</div>
                <div className="chat-bubble">{comment.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
