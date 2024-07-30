import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white bg-gradient-to-r from-black h-screen">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white px-16 text-lg text-black p-4 w-10  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 px-16 text-lg text-white p-4 w-10 bg-opacity-50 rounded-lg">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
