import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyPayments = () => {
    const {user} = useAuth();
    const [currentUsers, setCurrentUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchTransactionId, setSearchTransactionId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    console.log(currentUsers);

    useEffect(() => {
        fetch(`http://localhost:4000/payment/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentUsers(data);
                setFilteredUsers(data);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        // Filter users based on name, date, and transaction ID whenever they change
        const filtered = currentUsers.filter((currentUser) =>
            currentUser.name.toLowerCase().includes(searchName.toLowerCase()) &&
            currentUser.date.includes(searchDate) &&
            currentUser.transactionId.includes(searchTransactionId)
        );
        setFilteredUsers(filtered);
    }, [searchName, searchDate, searchTransactionId, currentUsers]);

    const handleNameChange = (e) => {
        setSearchName(e.target.value);
    };

    const handleDateChange = (e) => {
        setSearchDate(e.target.value);
    };

    const handleTransactionIdChange = (e) => {
        setSearchTransactionId(e.target.value);
    };

    return (
        <div className='my-20 pt-5'>
            <h2 className='text-3xl font-bold text-gray-500 mb-2'>My Payments History</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={handleNameChange}
                    className='my-2 mr-2'
                />
                <input
                    type="text"
                    placeholder="Search by date ex: Y-M-D"
                    value={searchDate}
                    onChange={handleDateChange}
                    className='mr-2'
                />
                <input
                    type="text"
                    placeholder="Search by Transaction ID"
                    value={searchTransactionId}
                    onChange={handleTransactionIdChange}
                    className='my-2'
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>S.L</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Paid</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.price}</td>
                                <td>{user.date}</td>
                                <td>{user.transactionId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPayments;