import React from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AddMovie = () => {
  const [rating, setRating] = React.useState(0);

  const handleRating = (rate) => {
    setRating(rate * 2);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const movieData = Object.fromEntries(formData.entries());
    console.log(movieData);

    movieData.rating = rating;
    movieData.duration = parseInt(movieData.duration);
    movieData.userEmail = "admin@cinenest.com";

    // 🔥 Validation
    if (!movieData.poster.startsWith("http")) {
      return toast.error("Poster must be a valid link");
    }
    if (!movieData.title || movieData.title.length < 2) {
      return toast.error("Title must be at least 2 characters");
    }
    if (!movieData.genre) {
      return toast.error("Select a genre");
    }
    if (!movieData.duration || movieData.duration <= 60) {
      return toast.error("Duration must be greater than 60 minutes");
    }
    if (!movieData.releaseYear) {
      return toast.error("Select release year");
    }
    if (!rating) {
      return toast.error("Please select a rating");
    }
    if (!movieData.summary || movieData.summary.length < 10) {
      return toast.error("Summary must be at least 10 characters");
    }

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        setRating(0);
        if (data.insertedId) {
          Swal.fire({
            title: "Movie Added Successfully!",
            icon: "success",
            confirmButtonColor: "#f1b345",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 py-16">
      <form
        onSubmit={handleAddMovie}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/10 text-white space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-yellow-400">Add New Movie</h1>
          <p className="text-gray-400">
            Share your favorite movie with the CineNest community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Movie Poster URL
            </label>
            <input
              type="text"
              name="poster"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="https://image-link.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Movie Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Movie Title"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Genre</label>
            <select
              name="genre"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Genre</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Action</option>
              <option>Sci-Fi</option>
              <option>Thriller</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Duration (minutes)
            </label>
            <input
              type="number"
              name="duration"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="120"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Release Year
            </label>
            <select
              name="releaseYear"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Year</option>
              {[2024, 2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Rating</label>

            <div className="flex justify-center items-center">
              <Rating
                fillColorArray={[
                  "#f14f45",
                  "#f16c45",
                  "#f18845",
                  "#f1b345",
                  "#f1d045",
                ]}
                onClick={handleRating}
                transition
                SVGstyle={{ display: "inline-block" }}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">Summary</label>
          <textarea
            name="summary"
            rows="4"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Write a short summary of the movie..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
