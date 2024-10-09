import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  CodeBracketIcon,
  CubeIcon,
  ServerIcon,
  CommandLineIcon,
  CloudIcon,
  CircleStackIcon,
  ArrowPathIcon,
  BoltIcon,
  BeakerIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const skills = [
  { name: 'JavaScript', icon: CodeBracketIcon },
  { name: 'TypeScript', icon: CubeIcon },
  { name: 'React', icon: ArrowPathIcon },
  { name: 'Node.js', icon: ServerIcon },
  { name: 'Python', icon: BeakerIcon },
  { name: 'Django', icon: GlobeAltIcon },
  { name: 'PostgreSQL', icon: CircleStackIcon },
  { name: 'MongoDB', icon: CircleStackIcon },
  { name: 'Docker', icon: CubeIcon },
  { name: 'AWS', icon: CloudIcon },
  { name: 'Git', icon: CommandLineIcon },
  { name: 'GraphQL', icon: BoltIcon },
];

const Skills: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Tech Stack</h2>
        <animated.div style={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <IconComponent className="w-12 h-12 text-neon-blue mb-2" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </animated.div>
      </div>
    </section>
  );
};

export default Skills;