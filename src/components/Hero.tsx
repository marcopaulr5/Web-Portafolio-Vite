import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <animated.div style={fadeIn} className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-neon">
          Marco Paul Quispe
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Full-Stack Developer | Creating Digital Experiences
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://github.com/marcodev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/marcodev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/marcodev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
        </div>
        <a href="#projects" className="bg-neon-blue text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
          View My Work
        </a>
      </animated.div>
    </section>
  );
};

export default Hero;