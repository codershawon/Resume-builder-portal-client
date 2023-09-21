import React, { useContext, useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import SectionTitle from "../../Hooks/SectionTitle";

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://resume-builder-portal-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div data-aos="zoom-in" className="md:mt-20 mt-16">
      <SectionTitle
        subHeading={"Where we share our thoughts and ideas"}
        heading={"Blog Posts"}
      ></SectionTitle>

      <div className="flex justify-center pt-4 pb-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-6 ">
          {blogs.map((singleBlog) => (
            <SingleBlog
              key={singleBlog._id}
              singleBlog={singleBlog}
            ></SingleBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
