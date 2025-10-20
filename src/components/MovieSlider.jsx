import React, { useEffect, useState } from "react";

function MovieSlider({ movies = [] }) {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval); // cleanup
  }, [movies.length]);

  // 🛑 Safety check: No movies? Show nothing
  if (movies.length === 0) return null;

  const movie = movies[current];

  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
      {/* 🎥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${movie.Poster})`,
        }}
      >
        {/* 🕶️ Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* 📄 Movie Info */}
      <div className="relative z-10 flex flex-col justify-end h-full text-white px-6 sm:px-12 md:px-20 pb-20 md:pb-28">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {movie.Title}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 max-w-2xl line-clamp-3">
          {movie.Year} • IMDb: {movie.imdbID.slice(-3)} / 10
        </p>

        {/* 🎬 Buttons */}
        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold text-sm sm:text-base transition-all">
            ▶ Watch Now
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 px-5 py-2 rounded-full font-semibold text-sm sm:text-base transition-all">
            ❤️ Add to Favorites
          </button>
        </div>
      </div>

      {/* 🔘 Dots (Slide Indicators) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-red-600 scale-110" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieSlider;
