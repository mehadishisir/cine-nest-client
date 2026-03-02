import React from "react";
import { Link, NavLink } from "react-router";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Storytelling Still Matters in Modern Cinema",
      desc: "Technology keeps evolving, but the heart of cinema remains powerful storytelling that connects audiences emotionally.",
      date: "March 5, 2026",
      category: "Cinema",
    },
    {
      id: 2,
      title: "The Rise of AI in Film Production",
      desc: "AI is reshaping scripts, editing, and visual effects. But can it replace human creativity?",
      date: "March 12, 2026",
      category: "Technology",
    },
    {
      id: 3,
      title: "How CineNest Helps You Track Your Favorites",
      desc: "With ratings, favorites, and personalized recommendations, CineNest enhances your movie journey.",
      date: "March 20, 2026",
      category: "Platform Update",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          <span className="text-5xl">
            {" "}
            <Link
              to="/"
              className="btn btn-ghost text-xl ml-2 font-extrabold text-blue-600 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 bg-blue-600 text-white rounded-lg p-1 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                />
              </svg>
              CineNest
            </Link>
          </span>{" "}
          <span className="text-white-500 hover:text-yellow-500">Insights</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Thoughts, ideas, and trends shaping the world of cinema.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-5xl mx-auto space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group"
          >
            {/* Category Badge */}
            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-600/20 text-blue-400 rounded-full mb-4">
              {blog.category}
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
              {blog.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-5">{blog.desc}</p>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{blog.date}</span>
              <button className="text-blue-400 font-semibold hover:underline">
                Read Article →
              </button>
            </div>

            {/* Subtle Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
