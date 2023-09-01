import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleDown, FaDribbble, FaPowerOff } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // logout
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

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

  const navOptions = (
    <>
      <li className={location.pathname === "" ? "navActive" : "navStyle "}>
        <Link to="/allresume">Resume Template</Link>
      </li>
      <li className={location.pathname === "" ? "navActive" : "navStyle"}>
        <Link to="/">Cover Letter</Link>
      </li>

      <li
        className={`relative navHover ${
          location.pathname === "" ? "navActive" : "navStyle"
        }`}
      >
        <Link className="flex items-center gap-1" to="/">
          Career <FaAngleDown />
        </Link>
        {/* Dropdown options */}
        <ul className="navDropdown">
          <li
            className={
              location.pathname === "/coverletter" ? "navActive" : "navStyle"
            }
          >
            <Link to="/blogs">Blogs</Link>
          </li>
          <li
            className={
              location.pathname === "/coverletter" ? "navActive" : "navStyle"
            }
          >
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li
            className={
              location.pathname === "/coverletter" ? "navActive" : "navStyle"
            }
          >
            <Link to="/coverletter">CoverLetter</Link>
          </li>
        </ul>
      </li>
      {user && (
        <li className={location.pathname === "" ? "navActive" : "navStyle"}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {/* #### TODO #### do uncomment after implement the {authProvider} correctly
        {user && <li className="text-xl"><Link to="/dashboard">My Documents</Link></li>} */}

      <div>
        {user ? (
          <div className="flex items-center">
            {user.photoURL ? (
              <div className="dropdown lg:dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2"
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-30 lg:w-52"
                >
                  <li>
                    <Link to={`/dashboard/profile`}>
                      <FaUserCircle></FaUserCircle> Profile
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaDribbble></FaDribbble> Settings
                    </Link>
                  </li>
                  <hr className="my-3" />
                  <li>
                    <button onClick={handleLogout} className="">
                      <FaPowerOff></FaPowerOff> LogOut
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <FaUserCircle
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2"
                  title={user.displayName}
                />
              </>
            )}
          </div>
        ) : (
          <div>
            <div>
              <Link to="/login" className="btn my-btn">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <nav className="navBar">
      <div className="rgContainer flex justify-between items-center">
        <div className="flex  items-center">
          <Link to="/">
            <img
              className="w-44 lg:w-full"
              src="https://i.ibb.co/zhYJKFk/resume-cv-cover-letter-transparent.png"
              alt="Resume genius logo"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-4">{navOptions}</ul>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu options */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <ul>{navOptions}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
