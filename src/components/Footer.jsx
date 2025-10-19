import spidermanImg from '../assets/spiderman.jpg';
import { FaCrown, FaBolt, FaPlay, FaClosedCaptioning } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer({ onHomeClick, onMoviesClick, onTVSeriesClick, onContactClick }) {
  return (
    <div className='relative h-[700px] sm:h-[550px] overflow-hidden'>
      <img 
        src={spidermanImg}
        alt='Spider-Man art'
        className='absolute w-full h-full object-cover opacity-15'
      />
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center sm:items-start sm:text-left p-6 sm:p-12 pb-24'>
        <h1 className='text-white text-3xl sm:text-4xl font-light mb-4'>About Us</h1>
        <p className='text-gray-300 max-w-2xl mb-8'> 
          <span className='text-red-600 font-light'>Binge</span><span className='text-white font-light'>Box</span> is a free TV shows streaming website with zero ads. It allows you to <span className='text-white font-bold'>watch TV shows online, watch TV shows online free</span> in high quality for free. You can also download full TV shows and watch them later if you want.
        </p>

        <p className='text-white text-xs font-light mb-12'>
        This site does not store any files on our server; we only link to the media hosted on 3rd party services.
        </p>

        <div className='grid grid-cols-2 gap-x-12 gap-y-6 max-w-md text-gray-300'>
          
          <div className='flex items-center gap-2'>
            <div className='border-1 border-red-600 rounded-md p-2'>
              <FaCrown className='text-red-600 text-xl' />
            </div>
            <span>High quality</span>
          </div>

          <div className='flex items-center gap-2'>
            <div className='border-1 border-red-600 rounded-md p-2'>
              <FaPlay className='text-red-600 text-xl' />
            </div>
            <span>Free forever</span>
          </div>

          <div className='flex items-center gap-2'>
            <div className='border-1 border-red-600 rounded-md p-2'>
              <FaBolt className='text-red-600 text-xl' />
            </div>
            <span>Fast load</span>
          </div>

          <div className='flex items-center gap-2'>
            <div className='border-1 border-red-600 rounded-md p-2'>
              <FaClosedCaptioning className='text-red-600 text-xl' />
            </div>
            <span>Multi subtitles</span>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30'>
        <ul className='flex justify-center items-center gap-6 text-gray-300 text-sm'>
          <li><Link to="/" className='hover:text-red-600 cursor-pointer'
          onClick={onHomeClick}
          >Home</Link>
          </li>
          <li><Link to="/movies" className='hover:text-red-600 cursor-pointer'
          onClick={onMoviesClick}
          >Movies</Link>
          </li>
          <li><Link to="/series" className='hover:text-red-600 cursor-pointer'
          onClick={onTVSeriesClick}
          >TV Series</Link>
          </li>
          <li><Link to="/contact" className='hover:text-red-600 cursor-pointer'
          onClick={onContactClick}
          >Contact</Link></li>
          <li className='hover:text-red-600 cursor-pointer'>Terms of Service</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
