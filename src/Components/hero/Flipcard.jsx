import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/Card/card1.jpg",
  "/src/assets/Card/card2.jpg",
  "/src/assets/Card/card3.jpg",
  "/src/assets/Card/card4.jpg",
  "/src/assets/Card/card5.jpg",
];

const FlipCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFlipped(false); 
      }, 2000); 

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" lg:w-90 lg:h-130  w-45 h-65 ">
      <div
        className={`w-full h-full transition-transform duration-1000 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-hidden">
          <img
            src={images[currentImage]}
            alt="Front"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-gray-300 rounded-lg shadow-lg backface-hidden transform rotate-y-180">
          <img
            src={images[(currentImage + 1) % images.length]}
            alt="Back"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
