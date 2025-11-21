import './App.css';
import { useRef, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import ContactUs from './pages/ContactUs';
import TermsOfService from './pages/TermsOfService';
import MovieDetails from './pages/MovieDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Pay from './pages/Pay';

function App() {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const apiKey = 'e7d64aa1';

  const getPopularShows = async(search) => {
  if(!search)
      return;

  setLoading(true);

  try {
      const url = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`;
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
      getPopularShows('Avengers');
      window.scrollTo(0, 0)
  }, [])

  const logoClick = () => {
    getPopularShows('Avengers');
    scrollToHome();
  }

  return (
    <>
    <div ref={homeRef}>
      <Header 
        onAboutClick={scrollToAbout} 
        getPopularShows={getPopularShows}
        onLogoClick={logoClick}
      />
    </div>

    <main>
      <Routes>
        <Route path="/" element={<Home results={results} loading={loading} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/series' element={<Series />}/>
        <Route 
          path="/contactus" 
          element={
          <ProtectedRoute>
            <ContactUs />
          </ProtectedRoute>
          }
        />
        <Route path='/pay' element={<Pay />} />
        <Route path="/terms" element={<TermsOfService />}/>
        <Route path="/movie/:imdbID" element={<MovieDetails />}/>
      </Routes>
    </main>
    
    <div ref={aboutRef}>
      <Footer 
      onHomeClick={scrollToHome} 
      onMoviesClick={scrollToHome}
      onTVSeriesClick={scrollToHome}
      onContactUsClick={scrollToHome}
      onTermsOfServiceClick={scrollToHome}
      />
    </div>
    </>
  )
}

export default App