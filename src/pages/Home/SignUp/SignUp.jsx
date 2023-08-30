import "react-tabs/style/react-tabs.css";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const [control, setControl] = useState(false);

  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append('image', image);
 
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imageData => {
      const imageUrl = imageData.data.display_url;

      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, imageUrl)
            .then(() => {
              const saveUser = {
                name: data.name,
                email: data.email,
                photoURL: imageUrl,
              };

              fetch("https://resume-builder-portal-server.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Login Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/");
                  }
                });
            })
            .catch((error) => console.log(error));
        });
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
        //fetch("https://resume-builder-portal-server.vercel.appusers", {
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
    <div>
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
              <span className="text-red-700">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="file"
              id='image'
              name='image'
              accept='image/*'
              {...register("photoURL", { required: true })}
              placeholder="PhotoURL"
              className="input input-bordered bg-white"
              required
            />
            {errors.photoURL && (
              <span className="text-red-700">PhotoURL is required</span>
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
              <span className="text-red-700">Email is required</span>
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
                  type="text"
                  {...register("text", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered bg-white"
                />

                <span
                  onClick={() => setControl(!control)}
                  className="relative left-52  sm:left-72 bottom-8"
                >
                  <FaEye />
                </span>
              </>
            ) : (
              <>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered bg-white"
                />

                <span
                  onClick={() => setControl(!control)}
                  className="relative left-52  sm:left-72 bottom-8"
                >
                  <FaEyeSlash />
                </span>
              </>
            )}
            {errors.password?.type === "required" && (
              <p className="text-red-700">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-700">password must be 6 Characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-700">
                password must be less then 20Characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-700">
                password must have one upper case one logger case one number or
                one spicial charat
              </p>
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
                  type="text"
                  {...register("text", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered bg-white"
                />

                <span
                  onClick={() => setShow(!show)}
                  className="relative left-52 sm:left-72 bottom-8"
                >
                  <FaEye />
                </span>
              </>
            ) : (
              <>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered bg-white"
                />

                <span
                  onClick={() => setShow(!show)}
                  className="relative left-52 sm:left-72 bottom-8"
                >
                  <FaEyeSlash />
                </span>
              </>
            )}

            {errors.confirmPassword?.type === "required" && (
              <p className="text-red-700">password is required</p>
            )}
            {errors.confirmPassword?.type === "minLength" && (
              <p className="text-red-700">password must be 6 Characters</p>
            )}
            {errors.confirmPassword?.type === "maxLength" && (
              <p className="text-red-700">
                password must be less then 20Characters
              </p>
            )}
            {errors.confirmPassword?.type === "pattern" && (
              <p className="text-red-700">
                password must have one upper case one logger case one number or
                one spicial charat
              </p>
            )}

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

            <p className="font-semibold text-gray-600">Continue with Google</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;