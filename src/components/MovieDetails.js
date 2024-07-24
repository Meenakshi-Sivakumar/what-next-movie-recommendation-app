// src/components/MovieDetails.js
import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mt-2" />
    </div>
  );
};

export default MovieDetails;
