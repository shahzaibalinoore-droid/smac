import { useState, useEffect } from "react";

const heroImages = [
  "/smac-og-image.jpg",
  "https://i.ibb.co/LdtLcHkQ/IMG-20251123-WA0013.jpg",
  "https://i.ibb.co/LzCqYvph/IMG-20250930-WA0190.jpg",
  "https://i.ibb.co/VfRwfv3/IMG-20250930-WA0206.jpg",
  "https://i.ibb.co/LXnhhBTx/IMG-20250930-WA0061.jpg",
  "https://i.ibb.co/VWChTXDQ/IMG-20251123-WA0018.jpg",
  "https://i.ibb.co/b5rsq83f/IMG-20250930-WA0284.jpg",
  "https://i.ibb.co/DJKgh61/IMG-20250930-WA0238.jpg",
  "https://i.ibb.co/gFgh2Vp5/IMG-20250930-WA0216.jpg",
  "https://i.ibb.co/ycLDX5nS/IMG-20250930-WA0214.jpg",
  "https://i.ibb.co/h1HCyCMd/IMG-20250930-WA0211.jpg",
  "https://i.ibb.co/x8jKcJ6d/IMG-20250930-WA0200.jpg",
  "https://i.ibb.co/bjyMqksp/IMG-20250930-WA0113.jpg",
  "https://i.ibb.co/JF2PW44L/IMG-20250930-WA0112.jpg",
  "https://i.ibb.co/Hf7RrWyB/IMG-20250930-WA0111.jpg",
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        setNextIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
        }}
      />
      
      {/* Next Image (preloaded underneath) */}
      <div
        className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${heroImages[nextIndex]})`,
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      
      {/* Ken Burns Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Preload all images */}
      <div className="hidden">
        {heroImages.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
