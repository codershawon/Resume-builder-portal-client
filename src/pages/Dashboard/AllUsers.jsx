import { FaTrash, FaUserCheck, FaUserCircle } from "react-icons/fa";

import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import SectionTitle from "../../Hooks/SectionTitle";

const AllUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const pageCount = Math.ceil(users.length / pageSize);
  const offset = currentPage * pageSize;
  const currentPageUsers = users.slice(offset, offset + pageSize);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Are you sure you want to make ${user.name} an admin?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make him/her admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://resume-builder-portal-server.vercel.app/users/admin/${user._id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  // delete function
  const handleDelete = (user) => {
    Swal.fire({
      title: `Are you sure you want to delete ${user.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",

      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://resume-builder-portal-server.vercel.app/users/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "This user has been deleted.", "success");
            }
          });
      }
    });
  };

  //TODO : shorten user name must must

  return (
    <div>
      <h3 className="w-full h-full text-3xl text-center font-semibold my-8 relative">
        Manage Users : {users.length}
      </h3>
      

      <div className="overflow-x-auto">
        <table className="table  table-zebra-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-[#197685] text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {currentPageUsers.map((user, index) => (
              <tr
                key={user._id}
                style={{ backgroundColor: "white" }}
                className="bg-gray-50 border-0"
              >
                <th>{index + 1}</th>
                <td className="flex items-center gap-2">
                  <span>
                    {user.photoURL ? (
                      <img
                        className="md:w-12 md:h-12 w-9 h-9 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    ) : (
                      <FaUserCircle className="md:w-12 md:h-12 w-6 h-6 rounded-full"></FaUserCircle>
                    )}
                  </span>
                  {user.name}
                </td>
                <td>{user.email}</td>
                <td>
                  <button
                    disabled={user.role === "admin"}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-[#197685] text-white px-3 rounded-md"
                  >
                    <FaUserCheck className="w-[23px]"></FaUserCheck>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-[#197685] px-3 hover:shadow-lg rounded-md hover:bg-white hover:text-[#197685] text-white"
                  >
                    <FaTrash className="w-[23px] "></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-12 absolute bottom-0 left-1/3">
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

export default AllUsers;
