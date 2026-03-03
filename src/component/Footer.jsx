import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaNpm,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-300 pt-14 pb-8 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            CineNest
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Your ultimate destination to explore, rate and manage your favorite
            movies. Discover new stories and build your personal watchlist with
            ease.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/sokaler.shisir.50/"
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-sky-500 p-3 rounded-full transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/uraniiam_256/"
              className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtu.be/f53nqIBzii8?si=6Y162V6EELkNFHizhttps://youtu.be/f53nqIBzii8?si=6Y162V6EELkNFHiz"
              className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-movies" className="hover:text-blue-500 transition">
                All Movies
              </Link>
            </li>
            <li>
              <Link to="/add-movie" className="hover:text-blue-500 transition">
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500 transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <FaNpm className="text-red-600 text-lg" />
            support@cinenest.com
          </p>
          <p className="text-sm text-gray-400 mt-3 flex items-center gap-2">
            <FaNpm className="text-red-600 text-lg" />
            +880 1234-567890
          </p>
          <p className="text-sm text-gray-400 mt-3 flex items-center gap-2">
            <FaNpm className="text-red-600 text-lg" />
            Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CineNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
