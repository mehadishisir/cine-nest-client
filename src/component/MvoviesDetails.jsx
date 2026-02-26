import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Rating } from "react-simple-star-rating";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-center mt-10 text-gray-400">Loading...</div>;
  if (!movie)
    return (
      <div className="text-center mt-10 text-red-500">Movie not found</div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 rounded-3xl shadow-2xl mt-10 transform transition duration-500 hover:scale-105">
      {/* Poster */}
      <div className="relative mb-6">
        <img
          src={movie.poster || "https://via.placeholder.com/400x600"}
          alt={movie.title}
          className="w-full h-auto rounded-2xl shadow-xl object-cover"
        />
        {/* Rating Top Right */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-xl font-bold text-sm shadow-md flex items-center gap-1">
          <span className="ml-1">{movie.rating}/10</span>
        </div>
      </div>

      {/* Movie Info */}
      <h1 className="text-4xl font-extrabold mb-3 text-yellow-300">
        {movie.title}
      </h1>
      <p className="mb-2">
        <span className="font-semibold text-gray-300">Genre: </span>
        {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
      </p>
      <p className="mb-2">
        <span className="font-semibold text-gray-300">Duration: </span>
        {movie.duration} min
      </p>
      <p className="mb-2">
        <span className="font-semibold text-gray-300">Release Year: </span>
        {movie.releaseYear}
      </p>
      <p className="mb-4 text-gray-200">
        <span className="font-semibold">Summary: </span>
        {movie.summary}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button
          onClick={() => console.log("Delete Movie logic here")}
          className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
        >
          Delete Movie
        </button>
        <button
          onClick={() => console.log("Add to Favorites logic here")}
          className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
