import React from 'react';

import { useLottie } from 'lottie-react';
import errorAnimation from '../assets/Animation - 1747934417276.json'; 
import { Link } from 'react-router';

const ErrorPage = () => {
  const options = {
    animationData: errorAnimation,
    loop: true,
    autoplay: true,
    style: {
      height: '500px',
    },
  };

  const { View } = useLottie(options); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      {View}
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="mb-6 text-base-content text-lg max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn bg-primary text-secondary rounded-full">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
