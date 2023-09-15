import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleDown, FaDribbble, FaPowerOff } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaLanguage, FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import useAdmin from "../../Hooks/useAdmin";

//navbar
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation(["navbar"]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  // logout
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const [isAdmin, isAdminLoading] = useAdmin();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);


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
        <Link to="/allresume">{t("Resume")}</Link>

      </li>
      <li
        className={`relative navHover ${location.pathname === "" ? "navActive" : "navStyle"
          }`}>
        <Link className="flex items-center gap-1" to="/">
          {t("coverLetter")} <FaAngleDown />
        </Link>
        {/* Dropdown options */}
        <ul className="navDropdown">
          <li
            className={
              location.pathname === "/coverLetterChecker" ? "navActive" : "navStyle"
            }
          >
            <Link to="/coverLetterChecker">{t("cover letter checker")}</Link>

          </li>
          <li
            className={
              location.pathname === "/coverLetterBuilder" ? "navActive" : "navStyle"
            }
          >
            <Link to="/coverLetterBuilder">{t("cover letter builder")}</Link>


          </li>
        </ul>
      </li>

      <li
        className={`relative navHover ${location.pathname === "" ? "navActive" : "navStyle"
          }`}>
        <Link className="flex items-center gap-1" to="/">
          {t("career")} <FaAngleDown />
        </Link>
        {/* Dropdown options */}
        <ul className="navDropdown">
          <li
            className={
              location.pathname === "/coverletter" ? "navActive" : "navStyle"
            }
          >
            <Link to="/blogs">{t("blogs")}</Link>



          </li>
          <li
            className={
              location.pathname === "/coverletter" ? "navActive" : "navStyle"
            }
          >
            <Link to="/contactUs">{t("contactUs")}</Link>


          </li>
          <li
            className={
              location.pathname === "/coverletter" ? "navActive" : "navStyle"
            }
          >
            <Link to="/coverletter">{t("coverLetter")}</Link>



          </li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-2">
          <FaLanguage className="text-4xl" /><select
            className="bg-white font-bold"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </li>
      {user && (
        <li className={location.pathname === "" ? "navActive" : "navStyle"}>
          <Link to="/dashboard">{t("dashboard")}</Link>
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
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-30 lg:w-52">
                  <li>
                    <Link to={`/dashboard/profile`}>
                      <FaUserCircle></FaUserCircle> {t("profile")}
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaDribbble></FaDribbble> {t("settings")}
                    </Link>
                  </li>
                  <hr className="my-3" />
                  <li>
                    <button onClick={handleLogout} className="">
                      <FaPowerOff></FaPowerOff> {t("logout")}
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
                {t("login")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <nav className="navBar ">
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

        <ul className="hidden  md:flex items-center xl:space-x-2">{navOptions}</ul>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMobileMenuOpen ? (
                <></>
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
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <button onClick={toggleMobileMenu} className="w-full flex justify-end pb-12 mt-[-25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <></>
            )}
          </svg>
        </button>
        <ul className="flex flex-col justify-center items-center">{navOptions}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
