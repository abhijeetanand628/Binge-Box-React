import './App.css';
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Poster from './components/Poster';

function App() {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = 'e7d64aa1';

  const getPopularShows = async(search) => {
    if(!search)
      return;

    setLoading(true);

    try {
      const url = `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.Search);
      setResults(data.Search || []);
    } catch (error) {
      console.log("Failed to fetch the data", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  useEffect(() => {
    getPopularShows('Thor');
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div ref={homeRef}>
      <Header 
        onAboutClick={scrollToAbout} 
        getPopularShows={getPopularShows}
      />
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
    
    <div ref={aboutRef}>
      <Footer onHomeClick={scrollToHome} />
    </div>
    </>
  )
}

export default App