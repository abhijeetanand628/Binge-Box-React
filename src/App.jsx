import './App.css';
import { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const apiKey = 'e7d64aa1';

  const getPopularShows = async(search) => {
    try {
      const url = `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.Search);
    } catch (error) {
      console.log("Failed to fetch the data", error);
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

  return (
    <>
    <div ref={homeRef}>
      <Header 
        onAboutClick={scrollToAbout} 
        getPopularShows={getPopularShows}
      />
    </div>
    
    <div ref={aboutRef}>
      <Footer onHomeClick={scrollToHome} />
    </div>
    </>
  )
}

export default App