import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-black w-full min-h-screen flex flex-col'>
      <div className='bg-[#121212] w-full p-3 flex items-center justify-between relative'>
        <div className='flex items-center gap-3'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-2xl focus:outline-none cursor-pointer md:hidden'
          >
            ☰
          </button>


        <button className='text-2xl font-semibold text-red-600 cursor-pointer flex items-center gap-1'>
            🎬 <span className='text-white font-semibold'>Binge</span>Box
          </button>
        </div>


      <div className='relative flex items-center gap-3'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-gray-500 text-white rounded-full px-4 py-2 w-40 sm:w-56 md:w-64 lg:w-80 opacity-30 hover:opacity-100 focus:opacity-100 focus:outline-none transition-all duration-300'
          />
        <FaSearch className="absolute right-3 text-white opacity-70 hover:opacity-100 cursor-pointer" />
    </div>

    <ul className='hidden md:flex gap-6 text-white font-medium'>
          <li className='hover:text-red-500 cursor-pointer'>Home</li>
          <li className='hover:text-red-500 cursor-pointer'>Movies</li>
          <li className='hover:text-red-500 cursor-pointer'>TV Series</li>
    </ul>

    {menuOpen && (
          <div className='absolute top-16 left-3 bg-[#1e1e1e] text-white rounded-lg shadow-lg w-44 p-2 flex flex-col md:hidden transition-all duration-300 ease-in-out'>
            <ul>
              <li className='px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'>Home</li>
              <li className='px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'>Movies</li>
              <li className='px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer'>TV Series</li>
            </ul>
          </div>
    )}

    </div>
    </div>
  )
}

export default Header
