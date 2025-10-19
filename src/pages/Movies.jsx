import React, { useEffect, useState } from 'react'
import Poster from '../components/Poster';

function Movies() {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = 'e7d64aa1';

  const getMovies = async() => {
    setLoading(true);
    try {
      const url = `https://www.omdbapi.com/?s=action&type=movie&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.Search);
      setResults(data.Search || []);
    } catch (error) {
      console.log("Failed to fetch movies", error);
      setResults([])
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    window.scrollTo(0, 0)
  }, [])

   return (
    <div className="w-full flex justify-center bg-black min-h-[60vh]">
      <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center tracking-wide">
          Movies
        </h1>

        {loading ? (
          <div className="text-white text-lg sm:text-xl font-semibold mt-20 text-center">Loading...</div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full place-items-center">
            {results.map((movie) => (
              <Poster key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-white text-lg sm:text-xl font-semibold mt-20 text-center">
            No results found.
          </div>
        )}
      </div>
    </div>
  )
}


export default Movies
