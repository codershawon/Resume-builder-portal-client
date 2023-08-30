import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch((err)=> console.log(err))
    },[])
    return (
        <div className=''>
            <p className='text-2xl pb-3 pt-12  md:text-4xl text-center'>Our Blogs</p>
            <hr class="h-[3px]  bg-[#197685] bg-opacity-50  w-[15%] mx-auto border-0 dark:bg-gray-700"></hr>
             <div className='flex justify-center py-16'>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-6 '>
                {blogs.map((singleBlog)=>(<SingleBlog key={singleBlog._id} singleBlog={singleBlog}></SingleBlog>))}
             </div>
             </div>
           
        
        </div>
    );
};

export default Blogs;