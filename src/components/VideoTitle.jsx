import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white font-medium py-1.5 px-8 rounded hover:bg-red-600 opacity-70">
          ▶︎ Play
        </button>
        <button className="bg-black text-white font-medium py-1.5 px-8 rounded hover:bg-gray-950 opacity-60">
          ⌽ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
