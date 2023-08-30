import React, { useEffect, useState } from 'react';

const TotalSale = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/usersHistory")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error(error));
    }, []);


    const totalAmount = users.reduce((acc, user) => acc + parseFloat(user.price), 0);
    
    return (
        <div className='inline-block rounded-xl shadow-md shadow-[#42C3E4] border  p-5'>
            <h4 className='text-gray-500 font-extrabold'>Total</h4>
            <h4 className='text-gray-500 font-extrabold'>Sale Amount</h4>
            <p className='font-extrabold text-[#197685] text-xl md:text-3xl lg:text-5xl'>${totalAmount.toFixed(2)}</p>
        </div>
    );
};

export default TotalSale;