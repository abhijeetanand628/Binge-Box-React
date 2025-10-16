import './App.css';
import { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

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
      <Header onAboutClick={scrollToAbout} />
    </div>
    
    <div ref={aboutRef}>
      <Footer onHomeClick={scrollToHome} />
    </div>
    </>
  )
}

export default App
