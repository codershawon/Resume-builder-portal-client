import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserCheck, FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    // TODO : swap the vercel link
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
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
  };

  return (
    <div>
      <h3 className="text-3xl text-center font-semibold my-4">Manage Users</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-[#197685] text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody className=" text-gray-600">
            {users.map((user, index) => (
              <tr key={user._id}>
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
                  </span>{" "}
                  {user.name}
                </td>

                <td>{user.email}</td>
                <td>
                  <button
                    disabled={user.role === "admin"}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-[#197685] px-3 rounded-md"
                  >
                    <FaUserCheck className="text-white w-[23px]"></FaUserCheck>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
