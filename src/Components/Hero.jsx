import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";
import banner1 from "../assets/banner/banner1.png";
import banner2 from "../assets/banner/Banner2.png"
import banner3 from "../assets/banner/banner3.png";

const slides = [
  {
    id: 1,
    img: banner1,
    title: (
      <>
        <span className="text-primary">Get Tasks</span>{" "}
        <span className="text-secondary">Done, Fast</span>
      </>
    ),
    description: "Find skilled professionals to help with your work anytime.",
    buttonText: "Explore Tasks",
    buttonLink: "/BrowseTask",
  },
  {
    id: 2,
    img: banner2,
    title: (
      <>
        <span className="text-primary">Post Your</span>{" "}
        <span className="text-secondary">Work Easily</span>
      </>
    ),
    description: "Got a task? Post it in seconds and get offers fast.",
    buttonText: "Post Task",
    buttonLink: "/dashboard/addTask",
  },
  {
    id: 3,
    img: banner3,
    title: (
      <>
        <span className="text-primary">Trusted</span>{" "}
        <span className="text-secondary">Freelancers</span>
      </>
    ),
    description: "Work with top-rated taskers who deliver quality on time.",
    buttonText: "Browse Profiles",
    buttonLink: "/dashboard/myTasks",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: true,
  };

  return (
    <div className="mt-4 mx-4 lg:mx-0">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative h-[45vh] sm:h-[55vh] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden"
          >
            <img
              src={slide.img}
              alt="Banner"
              className="h-full w-full object-cover bg-white"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center px-4 sm:px-8 md:px-16">
              <div className="text-white max-w-xl space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg drop-shadow-sm">
                  {slide.description}
                </p>
                <Link to={slide.buttonLink}>
                  <button className="mt-2 sm:mt-4 bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-primary/90 transition">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
