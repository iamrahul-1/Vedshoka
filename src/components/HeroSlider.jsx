import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      title: "Welcome to our Site",
      description: "Discover PG and Guest Houses at the best prices",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: img2,
      title: "Your Perfect Stay Awaits Where Comfort Meets Community.",
      description: "Check out our PG and Guest Houses",
      buttonText: "Check Out",
    },
    {
      id: 3,
      image: img3,
      title: "Special Offers",
      description: "Check out Special Offers",
      buttonText: "View Offers",
    },
    {
      id: 4,
      image: img4,
      title: "Book Now",
      description: "Book your PG and Guest Houses now",
      buttonText: "Book Now",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Slide Image */}
            <div className="h-[600px] relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Slide Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Styles for Slider Arrows */}
      <style jsx>{`
        .slick-prev,
        .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .slick-prev {
          left: 20px;
        }
        .slick-next {
          right: 20px;
        }
        .slick-dots {
          bottom: 20px;
        }
        .slick-dots li button:before {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
