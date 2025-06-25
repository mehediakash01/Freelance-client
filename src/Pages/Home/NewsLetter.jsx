import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-base-200 py-12 px-4 md:px-16 my-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          📬 Stay Updated!
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Subscribe to our newsletter to get updates on new tasks, offers, and pro tips.
        </p>

        <form className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
