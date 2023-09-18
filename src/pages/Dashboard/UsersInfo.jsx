import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

const UsersInfo = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 7;

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


  return (
    <div>
      <h3 className="text-3xl text-center font-semibold my-8">
        Users Information
      </h3>
      <div className="overflow-x-auto">
       <div style={{ maxWeight: "50px", overflowX: "auto" }}>
       <table className="table table-lg ">
          <thead>
            <tr>
              <th >S.L</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Birth Date</th>
              <th>City</th>
              <th>Country</th>
              <th>Nationality</th>
            </tr>
          </thead>
          {/* <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img
                    src={user?.photoURL}
                    alt="usersPhoto"
                    className="w-10 rounded"
                  />
                </td>
                <td>{user.name ? user.name : "No Info"}</td>
                <td>{user.email ? user.email : "No Info"}</td>
                <td>{user.phone ? user.phone : "No Info"}</td>
                <td>{user.birthdate ? user.birthdate : "No Info"}</td>
                <td>{user.city ? user.city : "No Info"}</td>
                <td>{user.country ? user.country : "No Info"}</td>
                <td>{user.nationality ? user.nationality : "No Info"}</td>
              </tr>
            ))}
          </tbody> */}
          <tbody>
            {currentPageUsers.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img
                    src={user?.photoURL}
                    alt="usersPhoto"
                    className="w-10 rounded"
                  />
                </td>
                <td >{user.name ? user.name : "No Info"}</td>
                <td >{user.email ? user.email : "No Info"}</td>
                <td >{user.phone ? user.phone : "No Info"}</td>
                <td >{user.birthdate ? user.birthdate : "No Info"}</td>
                <td >{user.city ? user.city : "No Info"}</td>
                <td >{user.country ? user.country : "No Info"}</td>
                <td >{user.nationality ? user.nationality : "No Info"}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
      <div className="flex justify-center mt-8">
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

export default UsersInfo;
