import React, { useContext, useEffect, useRef, useState } from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
console.log(import.meta.env.VITE_IMGBB_KEY);

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const { user } = useContext(AuthContext);
  const inputRef = useRef(null);

  const handleImageChange = async () => {
    if (inputRef.current) {
      const selectedImage = inputRef.current.files[0];
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);

        const url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_KEY
        }`;

        try {
          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const imageData = await response.json();
            const imageUrl = imageData.data.display_url;

            const updatedProfile = { ...profile, photoURL: imageUrl };
            setProfile(updatedProfile);

//             // Update the image URL in the profile on the server
            fetch(`https://resume-builder-portal-server.vercel.app/users/${user.email}/update-profile`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ photoURL: imageUrl }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your profile image has been updated",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              })
              .catch((err) => {
                // Handle error while updating profile
                console.log(err);
              });
          } else {
            // Handle error
          }
        } catch (error) {
          // Handle error
          console.log(error);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const birthdate = form.birthdate.value;
    const country = form.country.value;
    const city = form.city.value;
    const name = form.name.value;
    const nationality = form.nationality.value;
    console.log(phone, birthdate, country, city, nationality, profile.photoURL);
    const updatedUserInfo = {
      phone,
      birthdate,
      country,
      name,
      city,
      nationality,
      // photoURL : image.photoURL
    };

//     fetch(`http://localhost:5000/users/${user.email}`, {
      fetch(`https://resume-builder-portal-server.vercel.app/users/${user.email}`, {
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
            position: "center",
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
//     fetch(`http://localhost:5000/users/${user.email}`)
      fetch(`https://resume-builder-portal-server.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="md:w-[70%] w-[90%] flex justify-center md:mt-18 mt-8">
      <div className="py-14 md:px-6 lg:px-14 px-2 border-s-4 border-t-4 border-[#197685] shadow-2xl rounded-e-3xl">
        <div className="flex justify-between ">
          <div className="md:mb-8 mb-6">
            <img
              className="md:w-32 w-16 mb-0 h-16 md:h-32 shadow-2xl shadow-gray-900  rounded-full ring ring-[#197685] ring-offset-base-100 ring-offset-1"
              src={profile?.photoURL || user?.photoURL}
              alt="User Profile"
            />
            <div className="flex -mt-6 justify-end md:w-32 w-32 -ml-12 md:-ml-0 items-end">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={inputRef}
                onChange={handleImageChange}
              />
              <button
                onClick={() => inputRef.current.click()}
                className="btn bg-white btn-sm   border-none w-[36px] hover:bg-white hover:text-[#197685]"
              >
                <FaUpload className=" text-[#42C3E4]  w-[40px] "></FaUpload>
              </button>
            </div>
          </div>

          <div className="flex justify-end  md:w-36 w-32 ">
            <a
              href="#my_modal_8"
              className="btn btn-sm w-[45px]  text-[#197685] bg-white hover:bg-white  border-none"
            >
              <FaEdit className="w-[40px] "></FaEdit>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-2 md:mt-4 items-center">
          <p className="md:text-lg text-sm text-gray-900 pt-1  pb-1 md:ps-3">
            Email : {profile?.email}
          </p>
          <p className="md:text-lg text-sm text-gray-900  pb-1 md:ps-3">
            Name : <span>{profile?.name}</span>
          </p>

          {profile?.phone && (
            <p className="md:text-lg text-sm text-gray-900  pb-1 md:ps-3">
              Phone : <span>{profile?.phone ? profile.phone : ""}</span>
            </p>
          )}
          {profile?.birthdate && (
            <p className="md:text-lg text-sm text-gray-900   pb-1 md:ps-3">
              Date Of Birth :{" "}
              <span>{profile?.birthdate ? profile.birthdate : ""}</span>
            </p>
          )}
          {profile?.country && (
            <p className="md:text-lg text-sm text-gray-900  pb-1 md:ps-3">
              Country : <span>{profile?.country ? profile.country : ""}</span>
            </p>
          )}
          {profile?.city && (
            <p className="md:text-lg text-sm text-gray-900   pb-1 md:ps-3">
              City : <span>{profile?.city ? profile.city : ""}</span>
            </p>
          )}
          {profile?.nationality && (
            <p className="md:text-lg text-sm text-gray-900   pb-1 md:ps-3">
              Nationality :{" "}
              <span>{profile?.nationality ? profile.nationality : ""}</span>
            </p>
          )}
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <dialog className="modal modal-middle" id="my_modal_8">
        <div method="dialog" className="modal-box">
          <div className="modal-action">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </a>
          </div>
          <div className="w-[80%] mx-auto text-gray-900">
            <form onSubmit={handleSubmit} className="grid grid-cols-2">
              <label className="block mb-2" htmlFor="city">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mb-4 h-[32px] rounded"
                required
              />

              <label className="block mb-2" htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full mb-4 h-[32px] rounded"
                required
              />
              <label className="block mb-2 " htmlFor="birthdate">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                className="w-full mb-4 h-[32px] rounded"
                required
              />
              <label className="block mb-2" htmlFor="country">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="w-full mb-4 h-[32px] rounded"
                required
              />
              <label className="block mb-2" htmlFor="city">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full mb-4 h-[32px] rounded"
                required
              />
              <label className="block mb-2" htmlFor="nationality">
                Nationality <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className="w-full mb-4 h-[32px] rounded"
                required
              />
              <div></div>
              <button
                type="submit"
                className="bg-[#197685] w-full hover:bg-gray-200 hover:text-[#197685] hover:border-[#197685] hover:border-s-4 hover:shadow-xl text-white py-2 px-4 rounded "
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
