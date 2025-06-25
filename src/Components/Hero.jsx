import React from "react";

// Import slick-carousel CSS for styling the slider correctly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co/DgsnvmPN/skilled.webp",
    title: "Get Tasks Done, Fast",
    description: "Find skilled professionals to help with your work anytime.",
    buttonText: "ExploreTasks",
    buttonLink: "/BrowseTask",
  },
  {
    id: 2,
    img: "https://i.ibb.co/WbbX7Ky/woman-Computer.webp",
    title: "Post Your Work Easily",
    description: "Got a task? Post it in seconds and get offers fast.",
    buttonText: "PostTask",
    buttonLink: "/addTask",
  },
  {
    id: 3,
    img: "https://i.ibb.co/twkX84NN/banner3.webp",
    title: "Trusted Freelancers",
    description: "Work with top-rated taskers who deliver quality on time.",
    buttonText: "BrowseProfiles",
    buttonLink: "/myTasks",
  },
  {
    id: 4,
    img: "https://i.ibb.co/8g2mMHZb/banner4.webp",
    title: "Fast & Reliable Service",
    description: "Join thousands who trust our platform to get jobs done.",
    buttonText: "JoinNow",
    buttonLink: "/contact",
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
    <div className=" mt-4 ">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative h-[40vh] md:h-[500px] rounded-xl overflow-hidden"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-content"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center px-6 md:px-12">
              <div className="text-secondary max-w-md">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-2 md:mt-4 text-sm md:text-lg">
                  {slide.description}
                </p>
                <Link to={slide.buttonLink}>
                  <button className="mt-4 bg-primary rounded-full px-4 py-2  btn text-secondary">
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
