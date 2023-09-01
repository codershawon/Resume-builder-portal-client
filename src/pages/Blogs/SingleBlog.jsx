import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ singleBlog }) => {
  const {
    _id,
    bloggerName,
    bloggerTitle,
    date,
    readingTime,
    blogTitle,
    blogDescription,
    imageUrl,
  } = singleBlog;

  const maxWords = 20;
  const words = blogDescription.split(" ");
  const truncatedDescription = words.slice(0, maxWords).join(" ");

  return (
    <div className="py-5 ">
     <Link to={`/blogDetails/${_id}`}>
     <div className="relative card card-compact w-[310px] h-[440px] shadow-md  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gray-200 duration-300  rounded-t-lg">
        <figure className=" mb-3" style={{ height: "190px" }}>
          <img src={imageUrl} alt="Blog Image" className="h-[190px] w-full rounded-t-lg" />
        </figure>
      
        <div className="card-body">
        <h2 className="font-medium text-lg pt-2 pb-1 px-5 text-left">
            {blogTitle}
          </h2>
          <p className="pb-1 px-5 text-gray-600 font-base text-left">{truncatedDescription}...</p>
          <div className="text-left pb-1 px-3">
        <p className="text-gray-700 font-medium">
            <span className="ml-2 font-bold uppercase">Author:</span> {bloggerName}
          </p>
          <p className="text-gray-700 font-medium">
            <span className="ml-2 font-bold uppercase">Date:</span> {date}
          </p>
        </div>
        </div>
         
         <div>
        
         </div>
      
        
      </div>
     </Link>
    </div>
  );
};

export default SingleBlog;
