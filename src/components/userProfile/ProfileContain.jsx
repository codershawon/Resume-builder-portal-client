import React, { useEffect, useState } from 'react';

const ProfileContain = () => {
  
  const [allResume, setResume] = useState([]);


  useEffect(() => {
    fetch("https://resume-builder-portal-server.vercel.app/resume")
      .then((res) => res.json())
      .then((data) => {
        setResume(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div>
      <img src={allResume.template} alt="" />
    </div>
  );
};

export default ProfileContain;