import React from "react";
import { Icon } from "@iconify/react"; 
import { Link } from "react-router";

const PromoSection = () => {
  return (
    <section className="bg-base-200 py-12 px-4 md:px-16 my-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            🎁 Limited Time Offer!
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Get 50% off on your first task posting. Offer valid for new users
            this month only. Don’t miss out!
          </p>

          <Link to="/addTask">
            <button className="btn btn-primary mt-6 px-6">
              Post a Task Now
            </button>
          </Link>
        </div>

        {/* Illustration */}
        <div className="flex-1 text-center">
          <Icon
            icon="twemoji:money-with-wings"
            width="180"
            height="180"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
