import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg">
          We created this freelancing platform to connect skilled professionals with clients who need tasks done — quickly, efficiently, and with full control. Whether you're looking to post a task or get hired to complete one, our goal is to make freelance work simple and transparent.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">What You Can Do Here</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            <strong>Browse & Apply for Tasks:</strong> Logged-in freelancers can explore available jobs, submit proposals, and track their work.
          </li>
          <li>
            <strong>Post Tasks:</strong> Clients can create detailed task listings, set deadlines, and budget, and receive bids from qualified users.
          </li>
          <li>
            <strong>Manage Projects:</strong> Both clients and freelancers can manage their tasks, update progress, and communicate in one place.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-lg">
          Our platform is lightweight, fast, and focused on just what you need — no unnecessary features or distractions. We care about usability, security, and making freelancing accessible for everyone.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p className="text-lg">
          Whether you're a client with a project in mind or a freelancer looking for new opportunities, our platform gives you the tools to collaborate and succeed.
        </p>
        <p className="mt-4 text-lg text-accent font-medium">
          Sign in and get started today!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
