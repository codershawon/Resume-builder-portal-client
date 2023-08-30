import React, { useEffect, useState } from 'react';

const PaymentsHistory = () => {
    const [users, setUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchTransactionId, setSearchTransactionId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/usersHistory")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setFilteredUsers(data);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        // Filter users based on name, date, and transaction ID whenever they change
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(searchName.toLowerCase()) &&
            user.date.includes(searchDate) &&
            user.transactionId.includes(searchTransactionId)
        );
        setFilteredUsers(filtered);
    }, [searchName, searchDate, searchTransactionId, users]);

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

            <h2 className='text-3xl font-bold text-gray-500 mb-2'>Payments History</h2>
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

export default PaymentsHistory;
