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

  const maxWords = 10;
  const words = blogDescription.split(" ");
  const truncatedDescription = words.slice(0, maxWords).join(" ");

  return (
    <div className="py-5 ">
     <Link to={`/blogDetails/${_id}`}>
     <div className="relative w-[310px] h-[440px] shadow-md  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gray-200 duration-300  rounded-t-lg">
        <figure className=" mb-3" style={{ height: "190px" }}>
          <img src={imageUrl} alt="Blog Image" className="h-[190px] w-full rounded-t-lg" />
        </figure>
      
          <h2 className="font-medium text-lg pt-2 pb-1 px-5 text-left">
            {blogTitle}
          </h2>
          <p className="pb-1 px-5 text-gray-600 font-base text-left">{truncatedDescription}...</p>
         
         <div className="absolute bottom-0">
         <span className="flex justify-between gap-16 px-6"><p className=" font-semibold ">{bloggerName}</p>
          <p className="font-medium ">
          {date}
        </p></span>
         </div>
      
        
      </div>
     </Link>
    </div>
  );
};

export default SingleBlog;
