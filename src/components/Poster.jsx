import { Link } from 'react-router-dom';

function Poster({movie}) {

    const {Title, Year, Type, Poster, imdbID} = movie;

    const posterURL = Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Link to={`/movie/${imdbID}`} className="block w-[180px]">
      <div
      className="bg-[#1e1e1e] rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col w-[180px] hover:scale-105"
      >
        <div className="relative w-full h-[270px]">
          <img
            src={posterURL}
            alt={Title}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <span
            className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md"
          >
            HD
          </span>
        </div>
        <div className="p-3 flex flex-col justify-between h-[120px] text-white">
          <h3 className="font-semibold text-base truncate">{Title}</h3>
          <p className="text-gray-400 text-sm">
            {Year ? Year : "Unknown Year"}
          </p>
          <span
            className="text-xs uppercase font-bold bg-gray-700 text-white rounded-full px-2 py-1 mt-1 self-start"
          >
            {Type}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Poster
