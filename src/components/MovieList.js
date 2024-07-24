import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200">
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full rounded" />
          )}
          <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
          <p className="text-sm mb-4">{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;