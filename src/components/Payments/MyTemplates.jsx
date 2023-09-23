import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SectionTitle from "../../Hooks/SectionTitle";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const MyTemplates = () => {
  const PAGE_SIZE = 5; // Number of items per page
  const [cart, refetch] = useCart();
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(cart.length / PAGE_SIZE);

  // Get the items to display on the current page
  const offset = currentPage * PAGE_SIZE;
  const currentPageItems = cart.slice(offset, offset + PAGE_SIZE);
  console.log(currentPageItems);

  const total = currentPageItems.reduce(
    (sum, resume) => sum + parseFloat(resume.price),
    0
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDelete = (resume) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://resume-builder-portal-server.vercel.app/carts/${resume._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div
      className="w-full h-full mt-5  bg-slate-50 text-black relative"
      style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}>
      <Helmet>
        <title> Resume-Crafters | My Templates</title>
      </Helmet>
      <SectionTitle subHeading={"Items in My Cart"} heading="My Templates" />

      <div
        className="w-full text-black bg-transparent"
        style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}>
        <table className="table table-zebra w-full shadow-l">
          <thead className="text-black text-md bg-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-">Price</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPageItems.map((resume, index) => (
              <tr key={resume._id}>
                <td className="px-4 py-2 bg-white">{offset + index + 1}</td>
                {/* <td className="px-4 py-2">{item.template}</td> */}
                <td className="px-4 py-2 bg-white">${resume.price}</td>
                <td className="px-4 py-2 bg-white">{resume.email}</td>
                <td className="px-4 py-2 bg-white">
                  <button
                    onClick={() => handleDelete(resume)}
                    className="btn btn-ghost bg-red-600 text-white">
                    <FaTrashAlt className="text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" font-semibold h-16 flex justify-evenly items-center  mt-12">
        <h3 className="text-xl">Total Quantity: {cart.length}</h3>
        <h3 className="text-xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="my-btn">PAY</button>
        </Link>
      </div>
      <div className="flex justify-center mt-8 absolute bottom-0 left-1/3">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          pageLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default MyTemplates;

