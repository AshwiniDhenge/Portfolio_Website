import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Skill />
      <Experience />  {/* Ensure this is added */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
