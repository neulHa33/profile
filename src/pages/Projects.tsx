import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp} className="text-center mb-12 xs:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-base-content mb-3 xs:mb-4">
            Featured Projects
          </h2>
          <p className="text-base xs:text-lg text-base-content/70 max-w-2xl mx-auto px-2">
            사용자 중심의 웹 경험을 설계한 프로젝트들입니다. 
            각 프로젝트는 문제 해결부터 배포까지의 전체 과정을 담고 있습니다.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
