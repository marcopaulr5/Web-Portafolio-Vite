import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: 'https://github.com/marcodev/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'A React Native mobile app for efficient task management and collaboration.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: 'https://github.com/marcodev/task-manager-app',
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'A responsive web app displaying real-time weather data using React and a weather API.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: 'https://github.com/marcodev/weather-dashboard',
  },
];

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Featured Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg neon-border">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-neon-blue text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;