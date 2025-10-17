import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Header({onAboutClick, getPopularShows}) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
      if(search.trim()) {
        getPopularShows(search);
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

    // const homeBtn = () => {
    //   getPopularShows('Thor');
    //   window.scrollTo(0, 0);
    // }

  return (
    <div className='bg-black w-full h-auto flex flex-col'>
      <div className='bg-[#121212] w-full p-3 flex items-center justify-between relative'>
        <div className='flex items-center gap-3'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-2xl focus:outline-none cursor-pointer md:hidden'
          >
            ☰
          </button>


        <Link to="/" 
          className='text-2xl font-semibold text-red-600 cursor-pointer flex items-center'
          // onClick={homeBtn}
        >
          🎬 Binge<span className='text-white font-semibold'>Box</span>
          </Link>
        </div>


      <div className='relative flex items-center gap-3'>
          <input
            type='text'
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={enter}
            className='bg-gray-500 text-white rounded-full px-4 py-2 w-40 sm:w-56 md:w-64 lg:w-80 opacity-30 hover:opacity-150 focus:opacity-150 focus:outline-none transition-all duration-300'
          />
        <FaSearch className="absolute right-3 text-white opacity-70 hover:opacity-100 cursor-pointer" 
          onClick={handleSearch}
        />
    </div>

    <ul className='hidden md:flex gap-6 text-white font-medium'>
          <li><Link to="/" className='hover:text-red-600 cursor-pointer'>Home</Link></li>
          <li><Link to="/movies" className='hover:text-red-600 cursor-pointer'>Movies</Link></li>
          <li><Link to="/series" className='hover:text-red-600 cursor-pointer'>TV Series</Link></li>
          <li className='hover:text-red-600 cursor-pointer'
          onClick={onAboutClick}
          >About Us</li>
    </ul>

    {menuOpen && (
          <div className='absolute top-16 left-3 bg-[#1e1e1e] text-white rounded-lg shadow-lg w-44 p-2 flex flex-col md:hidden transition-all duration-300 ease-in-out'>
            <ul>
              <li><Link to="/" className='block px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'>Home</Link></li>
              <li><Link to="/movies" className='block px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'>Movies</Link></li>
              <li><Link to="/series" className='block px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'>TV Series</Link></li>
              <li className='px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'
              onClick={onAboutClick}
              >About Us</li>

            </ul>
          </div>
    )}

    </div>
    </div>
  )
}

export default Header