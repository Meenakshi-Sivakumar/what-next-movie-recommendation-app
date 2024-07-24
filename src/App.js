import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=9a55e48a7989a5152fbda0fe4418d015`);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div>
    <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Welcome to Movie Search App</h1>
    </header>
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="my-4">
        {selectedMovie ? <MovieDetails movie={selectedMovie} /> : <MovieList movies={movies} />}
      </div>
    </div>
    </div>
  );
};

export default App;
