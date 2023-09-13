import React from "react";

const VideoShow = ({ Video }) => {
  console.log(Video);
  return (
    <div>
      {/* <div className=" w-72 h-80 rounded-2xl bg-base-100 shadow-xl">
        <iframe
          className="rounded image-full w-72"
          src={Video.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; controls; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className=" p-4 card-body ">
          <h2 className="card-title">
          {Video.title}
          </h2>

          <div className="flex justify-between mt-6">
            <p>{Video.views}</p>
            <p>{Video.year}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VideoShow;
