
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 shadow-lg'>
      <div className='container py-4 flex justify-center md:justify-between items-center'>
        {/* Logo */}
        {/* <div className='text-2xl font-bold hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          AshwiniDhenge
        </div> */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          AshwiniDhenge
        </div>


        {/* Navigation Links */}
        <div className='space-x-6 flex items-center'>
          <a href="#home" className='hover:text-gray-400 transition-colors duration-200'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition-colors duration-200'>About</a>
          <a href="#education" className='hover:text-gray-400 transition-colors duration-200'>Education</a>
          <a href="#skill" className='hover:text-gray-400 transition-colors duration-200'>Skill</a>
          <a href="#experience" className='hover:text-gray-400 transition-colors duration-200'>Experience</a>
          <a href="#project" className='hover:text-gray-400 transition-colors duration-200'>Project</a>
          <a href="#contact" className='hover:text-gray-400 transition-colors duration-200'>Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

// ============================================================================================================================

