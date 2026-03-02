import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6">
      <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600 drop-shadow-[0_0_25px_rgba(37,99,235,0.5)]">
        404
      </h1>

      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-200">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 text-gray-400 max-w-md text-center leading-relaxed">
        The page you're looking for might have been removed, renamed, or is
        temporarily unavailable.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          Go Home
        </Link>

        <Link
          to="/blog"
          className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition duration-300"
        >
          Explore Blog
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
