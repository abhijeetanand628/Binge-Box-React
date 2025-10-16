import './App.css';
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = '1d61ff71090b794ac049506ada6d922b';

  async function getPopularShows(e) {
    e.preventDefault();
    if(searchQuery.trim() === '')
    {
      return;
    }

    try {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setSearchResults(data.results);
      console.log("searchResults after fetch:", data.results);
    } catch (error) {
      console.log("Failed to fetch search results", error);
    }
  }

  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
    <div ref={homeRef}>
      <Header 
      onAboutClick={scrollToAbout} 
      query={searchQuery}
      setQuery={setSearchQuery}
      getPopularShows={getPopularShows}
      />
    </div>

    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {searchResults.map((item, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src={item.poster_path 
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}` 
              : 'https://via.placeholder.com/500x750?text=No+Image'}
            alt={item.title || item.name}
            className="w-full h-80 object-cover"
          />
          <div className="p-2">
            <h3 className="text-sm font-semibold truncate">{item.title || item.name}</h3>
            <p className="text-xs text-gray-400">⭐ {item.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div ref={aboutRef}>
      <Footer onHomeClick={scrollToHome} />
    </div>
    </>
  )
}

export default App
