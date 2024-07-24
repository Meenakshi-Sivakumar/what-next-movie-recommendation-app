// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="border p-4 rounded">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mt-2" />
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;