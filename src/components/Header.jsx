import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Header({onAboutClick, getPopularShows, onLogoClick}) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]); 
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();

    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const searchContainerRef = useRef(null);

    const apiKey = 'e7d64aa1';

    useEffect(() => {
      if (search.trim() === '') {
            setSuggestions([]);
            setShowSuggestions(false);
            return; 
        }

        const debounceTimer= setTimeout(() => {
          fetchSuggestions();
        }, 300)

        return () => clearTimeout(debounceTimer);
    }, [search])

    const fetchSuggestions = async () => {
        try {
            const url = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`; 
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True" && data.Search) {
                setSuggestions(data.Search); 
                setShowSuggestions(true); 
            } else {
                setSuggestions([]); 
                setShowSuggestions(false); 
            }
        } catch (error) {
            console.error("Failed to fetch suggestions:", error);
            setSuggestions([]);
            setShowSuggestions(false); 
        }
    };

    const handleSearch = () => {
      if(search.trim()) {
        getPopularShows(search);
        setShowSuggestions(false);
        setSearch('');
        navigate('/');
      }
    };
  
    const enter = (e) => {
      if(e.key === 'Enter')
      {
        handleSearch()
      }
    }

    const handleSuggestionClick = (suggestionTitle) => {
        setSearch(suggestionTitle); 
        setShowSuggestions(false); 
        getPopularShows(suggestionTitle); 
        navigate('/'); 
    };

    const getNavLinkClass = ({ isActive }) => {
      return isActive
      ? 'text-red-600 cursor-pointer font-semibold underline underline-offset-6 decoration-2'
      : 'hover:text-red-600 cursor-pointer';
    }

    useEffect(() => {
      const touchOutside = (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target) && 
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
          setMenuOpen(false);
        }
        if (showSuggestions && searchContainerRef.current && 
          !searchContainerRef.current.contains(e.target)) 
          {
            setShowSuggestions(false);
          }
      }

      if(menuOpen) {
        document.addEventListener('touchstart', touchOutside);
      } else {
        document.removeEventListener('touchstart', touchOutside)
      }

      return () => {
        document.removeEventListener('touchstart', touchOutside)
      }
    }, [menuOpen, showSuggestions])

  return (
    <div className='bg-black w-full h-auto flex flex-col'>
      <div className='bg-[#121212] w-full p-3 flex items-center justify-between relative'>
        <div className='flex items-center gap-3'>
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-2xl focus:outline-none cursor-pointer md:hidden'
          >
            ☰
          </button>


        <Link to="/" 
          className='text-2xl font-semibold text-red-600 cursor-pointer flex items-center'
          onClick={onLogoClick}
        >
          🎬 Binge<span className='text-white font-semibold'>Box</span>
          </Link>
        </div>


      <div ref={searchContainerRef} className='relative flex items-center gap-3'>
          <input
            type='text'
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={enter}
            onFocus={() => search.trim() && suggestions.length > 0 && setShowSuggestions(true)}
            className='bg-gray-500 text-white rounded-full px-4 py-2 w-40 sm:w-56 md:w-64 lg:w-80 opacity-30 hover:opacity-150 focus:opacity-150 focus:outline-none transition-all duration-300'
          />
        <FaSearch className="absolute right-3 text-white opacity-70 hover:opacity-100 cursor-pointer" 
          onClick={handleSearch}
        />
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-[#1e1e1e] rounded-md shadow-lg max-h-60 overflow-y-auto z-[60]">
              <ul>
                  {suggestions.map((item) => (
                      <li
                          key={item.imdbID}
                          onClick={() => handleSuggestionClick(item.Title)}
                          className="text-white px-4 py-2 hover:bg-gray-700 cursor-pointer text-sm truncate" 
                      >
                          {item.Title} ({item.Year})
                      </li>
                  ))}
              </ul>
          </div>
        )}
      </div>
      
    <ul className='hidden md:flex gap-6 text-white font-medium'>
          <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
          <li><NavLink to="/movies" className={getNavLinkClass}>Movies</NavLink></li>
          <li><NavLink to="/series" className={getNavLinkClass}>TV Series</NavLink></li>
          <li className='hover:text-red-600 cursor-pointer'
          onClick={onAboutClick}
          >About Us</li>
    </ul>

    {menuOpen && (
          <div ref={menuRef} className='absolute top-16 left-3 bg-[#1e1e1e] text-white rounded-lg shadow-lg w-44 p-2 flex flex-col md:hidden transition-all duration-300 ease-in-out z-50'>
            <ul>
              <li><NavLink to="/" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/movies" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Movies</NavLink></li>
              <li><NavLink to="/series" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>TV Series</NavLink></li>
              <li className={getNavLinkClass}
              onClick={() => {
                setMenuOpen(false)
                onAboutClick()
              }}
              >About Us</li>

            </ul>
          </div>
    )}

    </div>
    </div>
  )
}

export default Header