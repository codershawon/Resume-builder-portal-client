import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UsersInfo = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });


    return (
        <div>
            <h2 className='text-3xl font-bold text-gray-500 mb-2'>Users Info</h2>

            <div className="overflow-x-auto">
                
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>S.L</th>
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
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img src={user?.photoURL} alt="usersPhoto" className='w-10 rounded' /></td>
                                <td>{user.name ? user.name : 'No Info'}</td>
                                <td>{user.email ? user.email : 'No Info'}</td>
                                <td>{user.phone ? user.phone : 'No Info'}</td>
                                <td>{user.birthdate ? user.birthdate : 'No Info'}</td>
                                <td>{user.city ? user.city : 'No Info'}</td>
                                <td>{user.country ? user.country : 'No Info'}</td>
                                <td>{user.nationality ? user.nationality : 'No Info'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersInfo;