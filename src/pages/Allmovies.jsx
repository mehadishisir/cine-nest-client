import React, { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";

const Allmovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default Allmovies;
