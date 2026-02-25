import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 relative">
      {/* Poster */}
      <div className="relative">
        <img
          src={movie.poster || "https://via.placeholder.com/300x400"}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />

        {/* Rating Top Right */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-lg font-bold text-sm">
          {movie.rating}/10
        </div>

        {/* Genre Bottom Left */}
        <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
          {movie.genre}
        </div>
      </div>

      {/* Movie Info below poster */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{movie.title}</h2>
        <p className="text-sm text-gray-300 mb-1">
          Release: {movie.releaseYear}
        </p>
        <p className="text-sm text-gray-300 mb-3">
          Duration: {movie.duration} min
        </p>

        <button
          onClick={() => navigate(`/movies/${movie._id}`)}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
