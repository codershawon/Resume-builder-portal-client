import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup'

const PremiumTemplateUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://resume-builder-portal-server.vercel.app/usersHistory")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error(error));
    }, []);
    console.log(users);

    const uniqueUserEmails = new Set(users.map(user => user.email));
    const totalUniqueUsers = uniqueUserEmails.size;


    return (
        <div data-aos="flip-up" data-aos-duration="1000" className=' rounded-xl shadow-md shadow-[#42C3E4] border  p-5'>
            <h4 className='text-xs sm:text-base text-gray-500  font-extrabold'>Premium</h4>
            <h4 className='text-xs sm:text-base text-gray-500  font-extrabold'>Template users</h4>
            <p className='font-extrabold text-[#197685] text-xl md:text-3xl lg:text-5xl'><CountUp start={0} end={totalUniqueUsers} duration={10} delay={0}></CountUp></p>
        </div>
    );
};

export default PremiumTemplateUsers;