import "react-tabs/style/react-tabs.css";
import "./login.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { AuthContext } from "../../Providers/AuthProvider";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUp from "../Home/SignUp/SignUp";
import Swal from "sweetalert2";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
 
  // eye
  const [control, setControl] = useState(false);

  const [password, setPassword] = useState(false);
  
  // Login

  const { signInUser, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

 // Google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
        };
        //fetch("https://resume-builder-portal-server.vercel.app/users", {
        fetch("https://resume-builder-portal-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <img
            src="https://i.ibb.co/Qdmr9LH/register-e58071de.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-white">
            <div>
              <h3 className="text-xl text-center">
                Welcome to{" "}
                <span className="text-[#197685] font-medium">ResumeGenius</span>
              </h3>
              <div className="my-3">
                <Tabs className="login-signup-toggle">
                  <TabList className="toggle-base">
                    <Tab className="signup-link md:max-w-[110px]">Login</Tab>
                    <Tab className="login-link md:max-w-[110px]">Sign Up</Tab>
                  </TabList>
                  <TabPanel>
                    <form onSubmit={handleLogin}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="input input-bordered bg-white"
                        />
                      </div>

                      <div className="form-control overflow-hidden">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        {control ? (
                          <>
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="text"
                              name="text"
                              placeholder="password "
                              className="input input-bordered bg-white"
                            />
                            <span
                              onClick={() => setControl(!control)}
                              className="relative left-[200px]  sm:left-72 bottom-8"
                            >
                              <FaEye />
                            </span>
                          </>
                        ) : (
                          <>
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              name="password"
                              placeholder="password "
                              className="input input-bordered bg-white"
                            />
                            <span
                              onClick={() => setControl(!control)}
                              className="relative left-[250px] sm:left-72 bottom-8"
                            >
                              <FaEyeSlash />
                            </span>
                          </>
                        )}
                        {/* ToDo forget password */}
                        <label className="label flex-row-reverse">
                          <Link
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forget password?
                          </Link>
                        </label>
                      </div>

                      <div className="form-control mt-6 flex-row-reverse ">
                        <input
                          className="my-btn w-full btn"
                          type="submit"
                          value="Login"
                        />
                      </div>
                      <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400 text-center">
                          Signup with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                      </div>
                      <div
                        onClick={handleGoogleSignIn}
                        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer w-full mx-auto pl-12 rounded-md bg-[#197685] bg-opacity-10"
                      >
                        <FcGoogle size={32} />

                        <p className="font-semibold text-gray-600">
                          Continue with Google
                        </p>
                      </div>
                    </form>
                  </TabPanel>

                  <TabPanel>
                    <div>
                      <SignUp></SignUp>
                      
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
