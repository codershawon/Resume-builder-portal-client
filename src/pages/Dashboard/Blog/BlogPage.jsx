import React from 'react';
import SectionTitle from '../../../Hooks/SectionTitle';
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const BlogPage = () => {
 

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const bloggerName = form.bloggerName.value;
        const bloggerTitle=form.bloggerTitle.value;
        const date = form.date.value;
        const blogTitle =form.blogTitle.value;
        const blogDescription=form.blogDescription.value;
        const readingTime =form.readingTime.value;
        const authorUrl=form.authorUrl.value;
        const imageUrl=form.imageUrl.value;
        const newBlog ={bloggerName,bloggerTitle,date,blogTitle,blogDescription,readingTime,authorUrl,imageUrl}
        console.log(newBlog);

        

        fetch(`https://resume-builder-portal-server.vercel.app/blogs`,{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newBlog)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            if(data.insertedId){
                form.reset();
                
             toast.success("Blog Posted successfully!");
            }
        })
        .catch((error) => {
            console.error(error);
            toast.error(error.message);
          });
    }

    return (
        <div className='md:mt-9 mt-5'>
           <SectionTitle
              subHeading={"Share your Thoughts"}
              heading={"Submit Blog Here"}
            ></SectionTitle>
            <div className=' mt-5 '>
                <form onSubmit={handleSubmit} className='w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto'>
               <div>
               <label className="block mb-2" htmlFor="city">
                Author Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bloggerName"
                name="bloggerName"
                placeholder='John Doe'
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
              />
               </div>
               <div>
               <label className="block mb-2" htmlFor="city">
                Author title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bloggerTitle"
                placeholder='Career Coach'
                name="bloggerTitle"
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
              />
               </div>

              <div>
              <label className="block mb-2" htmlFor="city">
                Author Image <span className="text-red-500">*</span>
              </label>
              {/* <input
                type="file"
                
                accept="image/*"
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
                // ref={}
                
              /> */}
              <input
                        type="url"
                        name="authorUrl"
                        placeholder="Author Image URL"
                        className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                        required
                    />
              </div>

              <div>
              <label className="block mb-2" htmlFor="city">
                Publishing date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
              />
              </div>
              <div>
              <label className="block mb-2" htmlFor="city">
                Blog title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="blogTitle"
                name="blogTitle"
                placeholder='Crafting the Perfect Resume: A Comprehensive Guide'
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
              />
               </div>

               <div>
               <label className="block mb-2" htmlFor="city">
                Blog Image <span className="text-red-500">*</span>
              </label>
              {/* <input
                type="file"
                
                accept="image/*"
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
                // ref={}
                
              /> */}
               <input
                        type="url"
                        name="imageUrl"
                        placeholder="Blog Image URL"
                        className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                        required
                    />
               </div>

               <div>
               <label className="block mb-2" htmlFor="city">
                Blog Description <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="blogDescription"
                name="blogDescription"
                placeholder='Uncover the hidden potential...'
                rows={5}
                className="w-full mb-4 border-none bg-[#94c8d21f] bg-opacity-25 focus:outline-none px-[10px] py-[12px] text-base hover:shadow-xl rounded p"
                required 
             />
               </div>
               <div>
                 <div><label className="block mb-2" htmlFor="city">
                Reading Time <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="readingTime"
                placeholder='10 mins'
                name="readingTime"
                className="w-full mb-4 h-[50%] hover:shadow-xl rounded"
                required
              /></div>
              <button
                type="submit"
                className="bg-[#197685] mt-2 w-full hover:bg-gray-50 hover:text-[#197685] hover:border-[#197685] hover:border-s-4 hover:shadow-xl text-white py-2 px-4 rounded "
              >
                Post
              </button>
               </div>

                </form>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default BlogPage;