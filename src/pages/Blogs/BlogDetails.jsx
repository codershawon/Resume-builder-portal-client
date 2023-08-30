import React from "react";
import { useState } from "react";
import { FaCalendar, FaCalendarCheck, FaStopwatch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { useEffect } from "react";

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const [profile, setProfile] = useState([]);
  
  const { user } = useContext(AuthContext);
  const {
    _id,
    bloggerName,
    bloggerTitle,
    date,
    readingTime,
    blogTitle,
    blogDescription,
    imageUrl,
  } = blogDetails;
  console.log(blogDetails);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      //fetch(`https://resume-builder-portal-server.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));

  }, []);






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
            <div>
              {/* <img src={bloggerImage} className='pe-2 rounded-full w-18' alt="" /> */}
              <p className="font-medium text-lg">{bloggerName}</p>
            </div>
            <p className=""> {date}</p>
          </div>
          <div className="flex gap-1 items-center text-[#197685]">
            <FaStopwatch className="text-[#197685]"></FaStopwatch> {readingTime}
          </div>
        </div>
        <p className="text-base pb-3">{bloggerTitle}</p>
        <p className="pt-5 pb-12 text-gray-700">{blogDescription}</p>
      </div>
      {/* comment section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <form className="mb-4" >
          <textarea
            rows="2"
            name="comments"
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border rounded-md resize-none focus:outline-[#197685] focus:border-[#197685]"
            style={{ border: "1px solid #ccc" }} // Add this line to set the border
          ></textarea>
          <button
            type="submit"
            className="bg-[#197685]  btn btn-sm hover:bg-white hover:text-[#197685] hover:border-[#197685]  hover:shadow-xl text-white h-10 px-4 rounded"
          >
            post
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default BlogDetails;
