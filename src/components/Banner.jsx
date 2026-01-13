import React from "react";

const Banner = ({ tickets }) => {
  // Calculate counts
  const inProgressCount = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;
  const resolvedCount = tickets.filter((t) => t.status === "Resolved").length; // default 0

  return (
    <div
      className="w-full py-10 px-5 md:px-10 rounded-lg mb-6"
      style={{
        background: "linear-gradient(to right, #667eea, #764ba2)", // gradient
      }}
    >
      <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
        {/* Banner Title */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold">
            Customer Support Zone
          </h1>
          <p className="mt-2 text-md md:text-lg">
            Manage your tickets efficiently
          </p>
        </div>

        {/* Stats */}
        <div className="flex space-x-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              {inProgressCount}
            </h2>
            <p className="text-md md:text-lg">In Progress</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">{resolvedCount}</h2>
            <p className="text-md md:text-lg">Resolved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
