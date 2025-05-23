import React from "react";

const services = [
  {
    title: "Website Development",
    image: "https://i.ibb.co/M5h7FddV/website.webp", 
    bg: "bg-green-100",
  },
  {
    title: "Video Editing",
    image: "https://i.ibb.co/5C7XD4Q/video-Editing.webp", 
    bg: "bg-pink-100",
  },
  {
    title: "Software Development",
    image: "https://i.ibb.co/V0ryJdNZ/softwear.webp", 
    bg: "bg-yellow-100",
  },
  {
    title: "SEO",
    image: "https://i.ibb.co/XrykF9PJ/seo.webp", 
    bg: "bg-emerald-100",
  },
  {
    title: "Architecture & Interior Design",
    image: "https://i.ibb.co/Q3FH5Nb9/architecher.png", 
    bg: "bg-rose-100",
  },
  {
    title: "Book Design",
    image: "https://i.ibb.co/hF3nWmVZ/book-Design.jpg", 
    bg: "bg-amber-100",
  },
];

const PopularServices = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl font-bold mb-6 text-red-500">Popular Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 shadow-md bg-red-700 text-white hover:scale-105 transition-transform duration-300`}
          >
            <div className={`rounded-md overflow-hidden ${service.bg} p-3`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-36 object-contain mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
