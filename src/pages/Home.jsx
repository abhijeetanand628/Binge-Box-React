import Poster from '../components/Poster';
import MovieSlider from '../components/MovieSlider';

function Home({ results, loading }) {
  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center text-white">

      <div className="w-full">

        {!loading && results.length > 0 && (
          <MovieSlider movies={results.slice(0, 6)} />  
        )}
      </div>

    <div className="w-full flex justify-center bg-black min-h-[60vh]">
      {loading ? (
        <div className="text-white text-lg sm:text-xl font-semibold mt-40">Loading...</div>
      ) : results.length > 0 ? (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 
                      py-6 sm:py-10 max-w-[1400px] w-full place-items-center">
        {results.map((movie) => (
          <Poster key={movie.imdbID} movie={movie} />
        ))}
      </div>
        ) : (
        <div className="text-white text-lg sm:text-xl font-semibold mt-10">
          No results found.
        </div>
      )}
    </div>
    </div>
  )
}

export default Home
