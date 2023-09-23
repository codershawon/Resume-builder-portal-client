import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup'

const TotalSale = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://resume-builder-portal-server.vercel.app/usersHistory")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error(error));
    }, []);


    const totalAmount = users.reduce((acc, user) => acc + parseFloat(user.price), 0);
    
    return (
        <div data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000" className='inline-block rounded-xl shadow-md shadow-[#42C3E4] border  p-5'>
            <h4 className='text-xs sm:text-base text-gray-500 font-extrabold'>Total</h4>
            <h4 className='text-xs sm:text-base text-gray-500 font-extrabold'>Sale Amount</h4>
            <p className='font-extrabold text-[#197685] text-xl md:text-3xl lg:text-5xl'>$ <CountUp start={0} end={totalAmount.toFixed(2)} duration={10} delay={0}></CountUp></p>
        </div>
    );
};

export default TotalSale;