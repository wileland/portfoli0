// client/src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold">Welcome to William Haynes' Portfolio</h1>
      <p className="text-xl mt-4">Showcasing projects, skills, and more</p>
      <a href="#projects" className="mt-8 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded">
        View Projects
      </a>
    </div>
  );
};

export default Hero;
