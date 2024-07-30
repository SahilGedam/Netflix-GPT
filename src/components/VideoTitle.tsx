import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white bg-gradient-to-r from-black h-screen">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        {/* <button className="bg-white px-16 text-lg text-black p-4 w-10  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 px-16 text-lg text-white p-4 w-10 bg-opacity-50 rounded-lg">
          Info
        </button> */}
        <button className="px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 ease-in-out">
     Play
    </button>
        <button className=" mx-2 px-6 py-3 text-white bg-gray rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 ease-in-out">
    More
    </button>
      </div>
    </div>
  );
};

export default VideoTitle;
