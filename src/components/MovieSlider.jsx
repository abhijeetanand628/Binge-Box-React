import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

function MovieSlider({ movies = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);

  const handleNext = () => {
    setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  if (movies.length === 0)
    return (
      <div className="text-white text-center py-20 text-lg sm:text-xl">
        Loading slides...
      </div>
    );

  const currentMovie = movies[current];

  const highResPoster = currentMovie?.Poster?.replace('_V1_SX300.jpg', '_V1_SX1000.jpg');

  const bgImage =
    currentMovie?.Poster !== "N/A"
      ? highResPoster
      : "https://via.placeholder.com/800x400?text=No+Image";

  return (
    <div 
      {...handlers} 
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden rounded-xl shadow-2xl"
    >

      <div
        key={current}
        className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(70%) contrast(105%) saturate(110%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:left-16 text-white max-w-xs sm:max-w-md md:max-w-2xl px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg mb-3">
          {currentMovie?.Title || "Untitled"}
        </h2>
        <p className="text-xs sm:text-sm md:text-lg text-gray-300 mb-5 line-clamp-3">
          {currentMovie?.Year ? `Released: ${currentMovie.Year}` : ""}
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full cursor-pointer text-sm sm:text-base font-semibold transition-all">
            ▶ Watch Now
          </button>
        </div>
      </div>

     <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full transition cursor-pointer"
      >
        <FaChevronLeft className="size-4 sm:size-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full transition cursor-pointer"
      >
        <FaChevronRight className="size-4 sm:size-5" />
      </button>

      <div className="absolute bottom-3 sm:bottom-6 w-full flex justify-center gap-2 sm:gap-3">
        {movies.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? "bg-red-500 scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MovieSlider;
