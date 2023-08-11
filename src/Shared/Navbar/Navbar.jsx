import './Navbar.css'

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from '../../assets/logo/resume-cv-cover-letter-transparent.png'
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {

  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Listen for changes in viewport size
  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // remove listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const navOptions = <>
    <li className={location.pathname === "" ? "navActive" : "navStyle "}><Link to='/' >Resume Template</Link></li>
    <li className={location.pathname === "" ? "navActive" : "navStyle"}><Link to="/">Cover Letter</Link></li>

    <li className={`relative navHover ${location.pathname === "" ? "navActive" : "navStyle"}`}>
      <Link className='flex items-center gap-1' to="/">Career <FaAngleDown/></Link>
      {/* Dropdown options */}
      <ul className="navDropdown">
        <li className={location.pathname === "/coverletter" ? "navActive" : "navStyle"}><Link to='/Resume' >Resume Template</Link></li>
        <li className={location.pathname === "/coverletter" ? "navActive" : "navStyle"}><Link to="/coverletter">CoverLetter</Link></li>
      </ul>
    </li>



    {/* #### TODO #### do uncomment after implement the {authProvider} correctly
        {user && <li className="text-xl"><Link to="/dashboard">My Documents</Link></li>} */}


  
    <div>
      {
        // user ?
        //   (<div className='flex items-center'>
        //     {user.photoURL ? <img className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' src={user.photoURL} alt={user.displayName} title={user.displayName}
        //     /> : <FaUserCircle className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' title={user.displayName} />}

        //     <Link to="/login"  className="btn btn-primary">Logout</Link>

        //   </div>)
        //   :
        (<div>
          <div><Link to="/" className="btn my-btn">Login</Link></div>
        </div>)}
    </div>
  </>


  return (
    <nav className="navBar">
<<<<<<< HEAD
      <FixedWidth>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
=======
      <div className="rgContainer flex justify-between items-center">
>>>>>>> ea7b99da9d951ddcebd99ab7733dbfa03b8c189d
        <div className="flex items-center">
          <img src={logo} alt="Resume genius logo" />
        </div>
        <ul className="hidden md:flex items-center space-x-4">
          {navOptions}
        </ul>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu options */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul>
          {navOptions}
        </ul>
      </div>
      </FixedWidth>
    </nav>
  );
};

export default Navbar;
