import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
// import Footer from '../Shared/Footer/Footer';
=======
import React from 'react';
>>>>>>> 797ad39c01077d8af0af6ba1d01e856d9f7c2124

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
};

export default Main;