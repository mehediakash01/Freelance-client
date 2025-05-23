import React from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router";
import FeaturedTask from "./FeaturedTask";
import { Slide } from "react-awesome-reveal";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import PopularServices from "./PopularServices";

const Home = () => {
  const featuredTasks = useLoaderData();
  const [text] = useTypewriter({
    words: [
      "Discover a curated list of high-priority freelance",
      "tasks with upcoming deadlines",
      "Pick the one that matches your skills",
      "and start bidding before time runs out",
    ],
    loop: true,
  });

  return (
    <div>
      <Banner></Banner>
      <div className="text-center my-5 space-y-2">
        <h1 className="text-4xl text-red-500"> Featured Tasks</h1>
        <p className="text-gray-600 ">
          {text}
          <Cursor></Cursor>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-12">
        <Slide direction="left" cascade damping={0.2} triggerOnce>
          {featuredTasks.map((sorted) => (
            <FeaturedTask key={sorted._id} sorted={sorted}></FeaturedTask>
          ))}
        </Slide>
      </div>

      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;
