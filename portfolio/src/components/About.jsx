import React from 'react';
import { motion } from 'framer-motion';
import selfie from '../assets/selfie.jpg';

const About = () => (
  <section id="about" className="p-8 bg-white">
    <h2 className="text-3xl mb-8 text-center">About Me</h2>
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
      <motion.img src={selfie} alt="William Haynes" className="w-32 h-32 rounded-full mb-4 lg:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} />
      <div>
        <p className="text-lg mb-4">
          Hi, I'm William Haynes. I completed UTSA's full stack bootcamp in February 2024, and I have two degrees in English. At 39 years old, I bring a unique perspective to tech with a strong foundation in communication and technical skills.
        </p>
        <p className="text-lg mb-4">
          I'm passionate about creating visually impressive web applications using modern technologies like React, Node.js, and Tailwind CSS. My goal is to leverage my diverse background to build intuitive and engaging user experiences.
        </p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/william-haynes" className="text-blue-500">LinkedIn</a>
          <a href="mailto:william@example.com" className="text-blue-500">Email</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
