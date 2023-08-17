import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./login.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  // eye
  const [control, setControl] = useState(false);

  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [show, setShow] = useState(false);
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
        title: "User Login successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  // register
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  // Google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "User Login successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        //save user to db
        // saveUser(result.user);
        navigate(from, { replace: true });
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
            src="https://i.ibb.co/CJ0Kq9t/mobile-login-concept-illustration-114360-135.png"
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
                    <Tab className="signup-link">Login</Tab>
                    <Tab className="login-link ">Sign Up</Tab>
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
                              type="password"
                              name="password"
                              placeholder="Password "
                              className="input input-bordered bg-white"
                            />
                            <span
                              onClick={() => setControl(!control)}
                              className="relative left-64  md:left-72 bottom-8"
                            >
                              <FaEyeSlash />
                            </span>
                          </>
                        ) : (
                          <>
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="text"
                              name="password"
                              placeholder="Password "
                              className="input input-bordered bg-white"
                            />
                            <span
                              onClick={() => setControl(!control)}
                              className="relative left-64  md:left-72 bottom-8"
                            >
                              <FaEye />
                            </span>
                          </>
                        )}
                        {/* ToDo forget password */}
                        <label className="label flex-row-reverse">
                          <a
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forget password?
                          </a>
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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="input input-bordered bg-white"
                            required
                          />
                          {errors.name && (
                            <span className="text-red-700">
                              Name is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">PhotoURL</span>
                          </label>
                          <input
                            type="photoURL"
                            {...register("photoURL", { required: true })}
                            placeholder="PhotoURL"
                            className="input input-bordered bg-white"
                            required
                          />
                          {errors.photoURL && (
                            <span className="text-red-700">
                              PhotoURL is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="input input-bordered bg-white"
                            required
                          />
                          {errors.email && (
                            <span className="text-red-700">
                              Email is required
                            </span>
                          )}
                        </div>
                        <div className="form-control overflow-hidden">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          {control ? (
                            <>
                              <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Password "
                                className="input input-bordered bg-white"
                              />
                              <span
                                onClick={() => setControl(!control)}
                                className="relative left-64  md:left-72 bottom-8"
                              >
                                <FaEyeSlash />
                              </span>
                            </>
                          ) : (
                            <>
                              <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="text"
                                name="password"
                                placeholder="Password "
                                className="input input-bordered bg-white"
                              />
                              <span
                                onClick={() => setControl(!control)}
                                className="relative left-64  md:left-72 bottom-8"
                              >
                                <FaEye />
                              </span>
                            </>
                          )}
                          {errors.password?.type === "minLength" && (
                            <p className="text-red-700">
                              password must be 6 Characters
                            </p>
                          )}
                          {errors.password?.type === "pattern" && (
                            <p className="text-red-700">
                              password must have one upper case one logger case
                              one number or one spicial charat
                            </p>
                          )}
                          {errors.password && (
                            <span className="text-red-700">
                              Password is required
                            </span>
                          )}
                        </div>
                        <div className="form-control overflow-hidden">
                          <label className="label">
                            <span className="label-text">Confirm Password</span>
                          </label>
                          {show ? (
                            <>
                              <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                name="confirmPassword"
                                placeholder="ConfirmPassword"
                                className="input input-bordered bg-white"
                              />
                              <span
                                onClick={() => setShow(!show)}
                                className="relative left-64  md:left-72 bottom-8"
                              >
                                <FaEyeSlash />
                              </span>
                            </>
                          ) : (
                            <>
                              <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="text"
                                name="confirmPassword"
                                placeholder="ConfirmPassword"
                                className="input input-bordered bg-white"
                              />
                              <span
                                onClick={() => setShow(!show)}
                                className="relative left-64  md:left-72 bottom-8"
                              >
                                <FaEye />
                              </span>
                            </>
                          )}
                          {errors.confirmPassword?.type === "minLength" && (
                            <p className="text-red-700">
                              password must be 6 Characters
                            </p>
                          )}
                          {errors.confirmPassword?.type === "pattern" && (
                            <p className="text-red-700">
                              password must have one upper case one logger case
                              one number or one spicial charat
                            </p>
                          )}
                          {errors.confirmPassword && (
                            <span className="text-red-700">
                              Password is required
                            </span>
                          )}
                          {/* TODO forget password setup */}
                          <label className="label flex-row-reverse">
                            <a
                              href="#"
                              className="label-text-alt link link-hover"
                            >
                              Forget password?
                            </a>
                          </label>
                        </div>
                        <div className="form-control mt-6 flex-row-reverse">
                          <input
                            className="my-btn w-full btn"
                            type="submit"
                            value="Sign Up"
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
