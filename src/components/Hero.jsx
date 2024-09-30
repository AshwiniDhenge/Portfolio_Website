
import React from 'react';

const Hero = () => {
  return (
    <div className='relative bg-black text-white text-center py-24 overflow-hidden'>
      {/* Animated Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute top-0 left-1/4 animate-pulse filter blur-3xl opacity-40"></div>
        <div className="w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full absolute top-1/2 right-1/4 animate-ping filter blur-2xl opacity-30"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full absolute bottom-0 right-0 filter blur-3xl opacity-20"></div>
      </div>

      {/* Hero Title */}
      <h1 className='text-6xl font-extrabold leading-tight relative z-10'>
        I'm {" "}
        <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Ashwini <br /> Dhenge
        </span>
      </h1>

      {/* Hero Description */}
      <p className='mt-6 text-lg text-gray-300 max-w-xl mx-auto relative z-10'>
        Crafting sleek, modern, and responsive web applications with the latest technologies to deliver exceptional user experiences.
      </p>

      {/* Call to Action Buttons */}
      <div className='mt-10 space-x-6 relative z-10'>
        <a
          href="src/assets/AshwiniDhenge.pdf"
          download
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-pink-500/50 focus:outline-none focus:ring-4 focus:ring-pink-500/50'
        >
          Download Resume
        </a>
      </div>

      {/* Interactive Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-float z-0">
        <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-xl opacity-50"></div>
      </div>
      <div className="absolute top-10 right-10 animate-float-slower z-0">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-xl opacity-40"></div>
      </div>
    </div>
  );
};

export default Hero;
