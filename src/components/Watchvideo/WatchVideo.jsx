import React, { useEffect, useState } from "react";
import SectionTitle from "../../Hooks/SectionTitle";
import { Link } from "react-router-dom";
import FixedWidth from "../fixedwidth";

const WatchVideo = () => {
  const [watchVideos, setWatchVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(4);

  useEffect(() => {
    fetch("watchVideo.json")
      .then((res) => res.json())
      .then((data) => {
        setWatchVideos(data);
      });
  }, []);

  const handleSeeMoreClick = () => {
    setVisibleVideos(visibleVideos + 4); // Increase the number of visible videos by 3
  };

  return (
    <div>
      <div className="breadcrumb-wrap">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link className="text-[#efc778] hover:underline " to="/">
                Home
              </Link>
            </li>
            <li>
              <span>Watch videos</span>
            </li>
          </ul>
        </nav>
      </div>
      <FixedWidth>
        <div className="mt-16">
          <SectionTitle
            subHeading={"Watch resume writeting ideas"}
            heading={" Watch videos for more resume-writing ideas"}
          ></SectionTitle>
        </div>

        <p className="text-center flex-grow p-6 md:p-0">
          If you’d rather master the arts of resume writing and
          formattingthrough video content, we’ve got{" "}
          <br className="hidden md:block" /> you covered. How to make a resume
          from the first step to the last step is shown in detail in the{" "}
          <br className="hidden md:block" /> video . And build your resume from
          the beginning with our resume builder in short but{" "}
          <br className="hidden md:block" />
          comprehensive YouTube videos and Shorts Videos.
        </p>

        <div className="my-20 ps-4 md:ps-0 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-grow-0 mx-auto">
          {watchVideos.slice(0, visibleVideos).map((Video, index) => (
            <div key={index}>
              {/* ... Your existing card code ... */}
               <div className=" card w-80 h-80  rounded-2xl bg-base-100 shadow-xl">
                <iframe
                  className="rounded image-full w-full"
                  src={Video.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; controls; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

                <div className="  card-body bg-white p-4">
                  <h2 className="card-title">{Video.title}</h2>

                  <div className="flex justify-between mt-8">
                    <p>{Video.views}</p>
                    <p>{Video.year}</p>
                  </div>
                </div>
              </div> 
              {/* <div className="card w-80 h-80 bg-base-100 shadow-xl">
              <iframe
                  className="rounded image-full w-full"
                  src={Video.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; controls; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div className="card-body">
                <h2 className="card-title">{Video.title}</h2>
                  <div className="card-actions justify-end">
                  <p>{Video.views}</p>
                    <p>{Video.year}</p>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          {visibleVideos < watchVideos.length && (
            <button  onClick={handleSeeMoreClick} className="my-btn ">
              See More
            </button>
          )}
        </div>

        {/* shorts */}
        <div className="my-20">
          <h2 className="text-4xl font-semibold mb-6">Reels</h2>
          <div className="mb-20  ps-16  md:ps-0 gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-grow-0 mx-auto">
            <div>
              <div className="w-80 card h-96 rounded-2xl bg-base-100 shadow-xl">
              <iframe height="586" className="rounded" src="https://www.youtube.com/embed/N7PeRloKSQs" title="ATS-Friendly Resume Template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div>
              <div className="w-80 card h-96 rounded-2xl bg-base-100 shadow-xl">
              <iframe height="586" className="rounded" src="https://www.youtube.com/embed/ih46c24b9K8"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div>
              <div className="w-80 card h-96 rounded-2xl bg-base-100 shadow-xl">
              <iframe height="586" className="rounded" src="https://www.youtube.com/embed/vSBUW3pGB68" title="Build Resume using Free AI tool.." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div>
              <div className="w-80 card h-96 rounded-2xl bg-base-100 shadow-xl">
              <iframe  height="586" className="rounded" src="https://www.youtube.com/embed/hb3lVtsTzO0" title="FREE Resume Template- Download Now🔥🔥 #resume #resumetips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </FixedWidth>
    </div>
  );
};

export default WatchVideo;
