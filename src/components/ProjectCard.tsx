import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Code } from 'lucide-react';
import { cardHover, fadeUp, scaleIn } from '../utils/animations';

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    period: string;
    stack: string[];
    bullets: string[];
    links: { demo: string; repo: string };
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={cardHover}
        initial="initial"
        whileHover="hover"
        className="group relative bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden cursor-pointer h-full hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-pastel-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-pastel-green transition-colors leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-neutral-500 flex-shrink-0 ml-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden xs:inline">{project.period}</span>
              <span className="xs:hidden">{project.period.split(' ')[0]}</span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4 flex-grow">
            {project.bullets.slice(0, 2).map((bullet, index) => (
              <li key={index} className="text-sm text-neutral-600 flex items-start">
                <div className="w-1.5 h-1.5 bg-pastel-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="line-clamp-2">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
            <span className="text-sm text-pastel-green font-semibold group-hover:underline flex items-center gap-1">
              자세히 보기
            </span>
            <div className="flex space-x-2">
              {project.links.demo && (
                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-pastel-green transition-colors" />
              )}
              {project.links.repo && (
                <Github className="w-4 h-4 text-neutral-400 group-hover:text-pastel-green transition-colors" />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 text-sm text-neutral-500 space-y-1 xs:space-y-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code className="w-4 h-4" />
                        <span>{project.stack.length} technologies</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-neutral-400 hover:text-neutral-600 flex-shrink-0"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pastel-green/20 text-pastel-green text-sm font-medium rounded-full border border-pastel-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900">주요 기능</h3>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, index) => (
                      <li key={index} className="text-neutral-700 flex items-start">
                        <div className="w-2 h-2 bg-pastel-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-pastel text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 inline" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.links.repo && (
                    <motion.a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-pastel-outline text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4 mr-2 inline" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
