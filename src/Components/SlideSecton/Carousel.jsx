// src/components/Carousel.js
import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    "/src/assets/Card/card1.jpg",
    "/src/assets/Card/card2.jpg",
    "/src/assets/Card/card3.jpg",
    "/src/assets/Card/card4.jpg",
    "/src/assets/Card/card5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative lg:w-90 lg:h-130  w-45 h-65 max-w-4xl mx-auto">
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-auto object-cover"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Optional indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
