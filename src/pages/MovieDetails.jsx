import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaFilm, FaClock, FaCalendarAlt } from 'react-icons/fa';

function MovieDetails() {
    const { imdbID } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = 'e7d64aa1';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            try {
                const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setMovieDetails(data);
            } catch (error) {
                console.log("Failed to fetch movie details", error);
                setMovieDetails(null);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieDetails();
        window.scrollTo(0, 0)
    }, [imdbID]);

    if (loading) {
        return <div className="bg-black text-white min-h-screen flex justify-center items-center text-xl">Loading...</div>;
    }

    if (!movieDetails) {
        return <div className="bg-black text-white min-h-screen flex justify-center items-center text-xl">Movie not found.</div>;
    }

    const posterURL = movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="bg-black text-white min-h-screen w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src={posterURL} alt={movieDetails.Title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{movieDetails.Title}</h1>
          <p className="text-lg text-gray-400 mt-2">{movieDetails.Rated}</p>

          <div className="flex items-center gap-6 text-gray-400 my-4 text-sm">
            <span className="flex items-center gap-2"><FaStar className="text-yellow-400" /> {movieDetails.imdbRating}</span>
            <span className="flex items-center gap-2"><FaClock /> {movieDetails.Runtime}</span>
            <span className="flex items-center gap-2"><FaCalendarAlt /> {movieDetails.Year}</span>
          </div>

          <div className="flex flex-wrap gap-2 my-4">
            {movieDetails.Genre?.split(', ').map(genre => (
              <span key={genre} className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">{genre}</span>
            ))}
          </div>

          <p className="text-gray-300 my-4 leading-relaxed">{movieDetails.Plot}</p>

          <div className="mt-6 border-t border-gray-800 pt-6 space-y-3 text-sm">
            <p><strong className="text-gray-400">Starring:</strong> {movieDetails.Actors}</p>
            <p><strong className="text-gray-400">Director:</strong> {movieDetails.Director}</p>
            {movieDetails.Released && movieDetails.Released !== "N/A" && (
                <p><strong className="text-gray-400">Released:</strong> {movieDetails.Released}</p>
            )}
            {movieDetails.Language && movieDetails.Language !== "N/A" && (
                <p><strong className="text-gray-400">Languages:</strong> {movieDetails.Language}</p>
            )}
            {movieDetails.Country && movieDetails.Country !== "N/A" && (
                <p><strong className="text-gray-400">Country:</strong> {movieDetails.Country}</p>
            )}
            {movieDetails.Awards && movieDetails.Awards !== "N/A" && (
                <p><strong className="text-gray-400">Awards:</strong> {movieDetails.Awards}</p>
            )}
            {movieDetails.BoxOffice && movieDetails.BoxOffice !== "N/A" && (
                <p><strong className="text-gray-400">Box Office:</strong> {movieDetails.BoxOffice}</p>
            )}
          </div>
          
          <Link to="/" className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition duration-300 self-start">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
