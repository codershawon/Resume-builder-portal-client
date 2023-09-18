import React, { useEffect, useState } from 'react';
import { FaCheck, FaCheckDouble, FaSign, FaTrash, FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Review = () => {

    const [testimonials, setTestimonials] = useState([]);

    const [showFullTextArray, setShowFullTextArray] = useState([]);
    const toggleShowFullText = (index) => {
        const newArray = [...showFullTextArray];
        newArray[index] = !newArray[index];
        setShowFullTextArray(newArray);
    };

    useEffect(() => {
        // Fetch testimonials from the backend
        fetch("https://resume-builder-portal-server.vercel.app/review")
            .then((res) => res.json())
            .then((data) => {
                const pendingTestimonials = data.filter((item) => item.status === "pending");
                setTestimonials(pendingTestimonials);
            })
            .catch((error) => console.error(error));
    }, [testimonials]);



    const handleApprove = (testimonial) => {
        // Close the modal before showing the Swal dialog
        document.getElementById('my_modal_5').close();
    
        Swal.fire({
            title: `Approve ${testimonial.name}'s review?`,
            text: "This action cannot be undone!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Send a PUT request to update testimonial status
                fetch(`http://localhost:4000/review/${testimonial._id}`, {
                    method: "PUT",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success) {
                            // Update the local state to reflect the change
                            setTestimonials((prevTestimonials) =>
                                prevTestimonials.map((t) =>
                                    t._id === testimonial._id ? { ...t, status: "approved" } : t
                                )
                            );
    
                            Swal.fire(
                                "Approved!",
                                `${testimonial.name}'s review is now approved.`,
                                "success"
                            );
                        } else {
                            Swal.fire("Error", "Failed to approve the review.", "error");
                        }
                    })
                    .catch((error) => console.error(error));
            }
        });
    };
    
    const handleDelete = (testimonial) => {
        // Close the modal before showing the Swal dialog
        document.getElementById('my_modal_5').close();
    
        Swal.fire({
            title: `Are you sure you want to delete ${testimonial.name}'s review post?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Use the correct URL for the delete request
                fetch(`http://localhost:4000/review/${testimonial._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            // Assuming refetch is defined elsewhere in your code
                            // refetch();
                            Swal.fire("Deleted!", "This user has been deleted.", "success");
                        } else {
                            Swal.fire("Error", "Failed to delete the testimonial.", "error");
                        }
                    })
                    .catch((error) => console.error(error));
            }
        });
    };
    

    return (
        <div>
            <h3 className="text-3xl text-center font-semibold my-4">Manage Reviews</h3>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-5'>
                {
                    testimonials.map((testimonial, index) => (
                        <div key={testimonial._id} className=''>


                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={testimonial.image} />
                                    </div>
                                </div>
                                <div className="chat-bubble">

                                    <div className='grid grid-cols-2 gap-2'>
                                        <p className='font-bold text-white text-lg capitalize'><span>{testimonial.name}</span> Wanted to post</p>

                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <div className='text-right'>
                                            <button className="text-[#197685] px-2 py-1 hover:bg-slate-200 rounded-2xl border border-red-600 font-bold" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Action</button>
                                        </div>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Take an Action!</h3>
                                                <p className="py-4">
                                                    <button
                                                        onClick={() => handleApprove(testimonial)}
                                                        className="btn bg-[#197685] px-3 mr-2 hover:shadow-lg rounded-md hover:bg-white hover:text-[#197685] text-white"
                                                    >
                                                        Approved <FaCheck className=" w-[23px] "></FaCheck>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(testimonial)}
                                                        className="btn bg-[#197685] px-3 hover:shadow-lg rounded-md hover:bg-white hover:text-[#197685] text-white"
                                                    >
                                                        Denied  <FaTrash className=" w-[23px] "></FaTrash>
                                                    </button></p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>

                                    <p className="">
                                        {showFullTextArray[index]
                                            ? testimonial?.reviewText
                                            : testimonial?.reviewText.slice(0, 50)}
                                        {testimonial?.reviewText.length > 208 &&
                                            !showFullTextArray[index] && (
                                                <span>
                                                    <button
                                                        className="text-semibold text-xl text-[#197685] ps-1"
                                                        onClick={() => toggleShowFullText(index)}
                                                    >
                                                        ...See More
                                                    </button>
                                                </span>
                                            )}
                                        {showFullTextArray[index] && (
                                            <span>
                                                <button
                                                    className="text-semibold text-xl text-[#197685] ps-2"
                                                    onClick={() => toggleShowFullText(index)}
                                                >
                                                    See Less!
                                                </button>
                                            </span>
                                        )}
                                    </p></div>
                            </div>


                        </div>

                    ))
                }
            </div>

        </div>
    );
};

export default Review;