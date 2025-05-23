import React from 'react';

const WhyUse = () => {
    return (
        <section className=" py-12 px-6 md:px-20 text-black bg-gray-200 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-red-600">Why businesses turn to RedLink</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-black flex items-center gap-2">
                <span className="text-red-600">✪</span> Proof of quality
              </h3>
              <p className="text-gray-700">Check any pro’s work samples, client reviews, and identity verification.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black flex items-center gap-2">
                <span className="text-red-600">$</span> No cost until you hire
              </h3>
              <p className="text-gray-700">Interview potential fits, negotiate rates, and only pay for approved work.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black flex items-center gap-2">
                <span className="text-red-600">✔</span> Safe and secure
              </h3>
              <p className="text-gray-700">We protect your data and offer 24/7 support if you need it.</p>
            </div>
          </div>
        </div>

       
        <div className="md:w-1/2 flex justify-center">
          <img
            src='https://i.ibb.co/twjSCDZX/woman.webp'
            alt="Illustration"
            className="max-w-[300px] w-full object-contain"
          />
        </div>
      </div>

    
      <div className="mt-12 bg-red-600 text-white p-8 rounded-xl shadow-md text-center">
        <h3 className="text-2xl font-semibold">We’re the world’s work marketplace</h3>
        <p className="mt-2 text-xl font-bold">★ 4.9/5</p>
        <p className="text-sm">Clients rate professionals on RedLink</p>
        <p className="mt-3 font-medium">🏆 Award winner — G2’s 2021 Best Software Awards</p>
      </div>
    </section>
    );
};

export default WhyUse;