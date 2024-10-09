import React from 'react';
import { useSpring, animated } from 'react-spring';

const About: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center neon-text">About Me</h2>
        <animated.div style={fadeIn} className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Hello! I'm Marco Paul Quispe, a passionate full-stack developer with a keen eye for creating elegant, efficient, and user-friendly digital solutions. With over 5 years of experience in the tech industry, I've had the pleasure of working on a diverse range of projects, from e-commerce platforms to mobile applications.
          </p>
          <p className="text-lg mb-6">
            My journey in software development began with a fascination for problem-solving and a desire to build things that make a difference. Today, I specialize in JavaScript ecosystems, particularly React and Node.js, but I'm always excited to learn and adapt to new technologies.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or contributing to open-source projects. I believe in the power of technology to transform lives and businesses, and I'm always looking for new challenges and opportunities to grow.
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default About;