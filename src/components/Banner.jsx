import React from "react";
import bgImg1 from "../assets/vector1.png";

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
      
      {/* In Progress */}
      <div
        className="flex-1 py-10 px-5 rounded-lg text-white text-center"
        style={{
          backgroundColor: "#422AD5",
          backgroundImage: `url(${bgImg1})`,
        }}
      >
        <h2 className="text-3xl font-bold">{inProgressCount}</h2>
        <p className="text-lg">In Progress</p>
      </div>

      {/* Resolved */}
      <div
        className="flex-1 py-10 px-5 rounded-lg text-white text-center"
        style={{
          backgroundColor: "#54CF68",
          backgroundImage: `url(${bgImg1})`,
        }}
      >
        <h2 className="text-3xl font-bold">{resolvedCount}</h2>
        <p className="text-lg">Resolved</p>
      </div>

    </div>
  );
};

export default Banner;
