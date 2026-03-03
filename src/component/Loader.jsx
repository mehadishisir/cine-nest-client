import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = ({ fullScreen = true }) => {
  return (
    <div
      className={`${
        fullScreen ? "min-h-screen" : "h-40"
      } flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900`}
    >
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
