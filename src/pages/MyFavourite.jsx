import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyFavourite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/favourite?email=admin@cinenest.com")
      .then((res) => res.json())
      .then((data) => setFavourites(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove from Favorites?",
      text: "This movie will be removed from your favorites.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6366f1",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/favourite/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setFavourites((prev) => prev.filter((movie) => movie._id !== id));

              Swal.fire("Removed!", "Movie removed from favorites.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400 tracking-wide">
        My Favourite Movies
      </h2>

      {favourites.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No favourite movies added yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {favourites.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                  {movie.title}
                </h3>

                <p className="text-gray-300 mb-1">
                  <span className="font-medium">Genre:</span>{" "}
                  {Array.isArray(movie.genre)
                    ? movie.genre.join(", ")
                    : movie.genre}
                </p>

                <p className="text-gray-300 mb-1">
                  <span className="font-medium">Duration:</span>{" "}
                  {movie.duration} min
                </p>

                <p className="text-gray-300 mb-1">
                  <span className="font-medium">Release Year:</span>{" "}
                  {movie.releaseYear}
                </p>

                <p className="text-gray-300 mb-4">
                  <span className="font-medium">Rating:</span> ⭐ {movie.rating}
                  /10
                </p>

                <button
                  onClick={() => handleDelete(movie._id)}
                  className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 rounded-xl font-semibold transition transform hover:scale-105"
                >
                  Delete Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavourite;
