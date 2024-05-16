import React from 'react';
import { motion } from 'framer-motion';

const critiques = [
  {
    feedback: 'Improve the performance of your React app by optimizing state management.',
    resolution: 'Refactored the app to use React Context API for better state management and improved component reusability.',
    link: 'https://github.com/williamhaynes/yourproject/pull/1'
  },
  {
    feedback: 'Enhance the accessibility of your web application.',
    resolution: 'Implemented ARIA roles and labels, improved color contrast, and ensured keyboard navigability.',
    link: 'https://github.com/williamhaynes/yourproject/issues/2'
  },
  {
    feedback: 'Improve the UI/UX design for better user engagement.',
    resolution: 'Redesigned the layout with a more intuitive navigation structure and used Tailwind CSS for a modern look.',
    link: 'https://github.com/williamhaynes/yourproject/pull/3'
  },
  // Add more critiques as needed
];

const Critiques = () => (
  <section id="critiques" className="p-8 bg-gray-100">
    <h2 className="text-3xl mb-8 text-center">Critiques & Improvements</h2>
    <div className="space-y-6">
      {critiques.map((critique, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <p className="text-lg mb-2"><strong>Feedback:</strong> {critique.feedback}</p>
          <p className="text-lg mb-2"><strong>Resolution:</strong> {critique.resolution}</p>
          {critique.link && (
            <a href={critique.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Details
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Critiques;
