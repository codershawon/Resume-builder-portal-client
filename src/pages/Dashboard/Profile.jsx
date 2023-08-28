import React, { useContext, useEffect, useRef, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import { FaUpload } from "react-icons/fa";
import Swal from "sweetalert2";

const Profile = () => {
  const [profile, setProfile] = useState([]);
const { user } = useContext(AuthContext);
  // const [image, setImage] = useState([]);
  // const inputRef = useRef(null);
  // const handleImageClick = () => {
  //   inputRef.current.click();
  // };

  // function handleImageChange(event) {
  //   const selectedImage = event.target.files[0];
  //   if (selectedImage) {
  //     const imageURL = URL.createObjectURL(selectedImage);
  //     setImage((prevProfile) => ({
  //       ...prevProfile,
  //       photoURL: imageURL,
  //     }));
  //   }
  // }

  //const image_hosting_url=`https://api.imgbb.com/1/upload?key=${VITE_IMAGE_TOKEN}`

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const birthdate = form.birthdate.value;
    const country = form.country.value;
    const city = form.city.value;
    const name = form.name.value;
    const nationality = form.nationality.value;
    console.log(phone, birthdate, country, city, nationality, profile?.photoURL);
    const updatedUserInfo = {
      phone,
      birthdate,
      country,
      name,
      city,
      nationality,
      // photoURL : image.photoURL
    };

  
    fetch(`https://resume-builder-portal-server.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          setProfile({ ...profile, ...updatedUserInfo });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your information has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  useEffect(() => {
   
    fetch(`https://resume-builder-portal-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  }, []);
  // console.log(profile.photoURL)

  return (
    <div className="md:flex justify-between items-center mt-12">
      <div>
        <div className="md:mb-12 mb-6">
          <img
            className="md:w-48 w-32 mb-0 h-32 md:h-48 rounded-full shadow-2xl"
            src={profile?.photoURL}
            //src={image ? image?.photoURL: profile?.photoURL}
            alt="User Profile"
          />

          <div className="flex -mt-7 justify-end md:w-36 w-32 md:ml-7 items-end">
            {/* <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={inputRef}
            /> */}
            <button
              // onClick={handleImageClick}
              className="btn btn-sm bg-[#197685] w-[39px] text-white hover:bg-white hover:text-[#197685] border-none"
            >
              <FaUpload className="w-[36px] "></FaUpload>
            </button>
          </div>
        </div>
        {/* <img src={image.photoURL} alt="" /> */}
        <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
          Email : {profile?.email}
        </p>
        <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
          Name : <span>{profile.name}</span>
        </p>

        {profile?.phone && (
          <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
            Phone : <span>{profile?.phone ? profile.phone : ""}</span>
          </p>
        )}
        {profile?.birthdate && (
          <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
            Date Of Birth :{" "}
            <span>{profile?.birthdate ? profile.birthdate : ""}</span>
          </p>
        )}
        {profile?.country && (
          <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
            Country : <span>{profile?.country ? profile.country : ""}</span>
          </p>
        )}

        {profile?.city && (
          <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
            City : <span>{profile?.city ? profile.city : ""}</span>
          </p>
        )}
        {profile?.nationality && (
          <p className="text-xl text-gray-700 pt-1 pb-2 rounded-lg px-3  ">
            Nationality :{" "}
            <span>{profile?.nationality ? profile.nationality : ""}</span>
          </p>
        )}
      </div>
      <div className="w-[70%] md:w-[40%] text-gray-700 md:mr-6">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="city">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          {/* <input type="file" className="file-input mb-4  file-input-bordered w-full max-w-xs" /> */}
          <label className="block mb-2" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <label className="block mb-2 " htmlFor="birthdate">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <label className="block mb-2" htmlFor="country">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full mb-4 p-2 border rounded"
            // value={formData.country}
            // onChange={handleChange}
            required
          />
          <label className="block mb-2" htmlFor="city">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <label className="block mb-2" htmlFor="nationality">
            Nationality <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-[#197685] w-full hover:bg-white hover:text-[#197685] hover:border-[#197685] hover:border-2 text-white py-2 px-4 rounded "
          >
            Save
          </button>
        </form>
      </div>

      {/* The rest of your profile display components */}
    </div>
  );
};

export default Profile;
