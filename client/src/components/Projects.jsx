import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A full stack web application using React and Node.js.',
    link: 'https://github.com/williamhaynes/project-one',
    demo: 'https://project-one.herokuapp.com',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project Two',
    description: 'An interactive data visualization tool using D3.js.',
    link: 'https://github.com/williamhaynes/project-two',
    demo: 'https://project-two.herokuapp.com',
    image: 'https://via.placeholder.com/300'
  },
  // Add more projects as needed
];

const Projects = () => (
  <section id="projects" className="p-8 bg-gray-100">
    <h2 className="text-3xl mb-8 text-center">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500">Demo</a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
