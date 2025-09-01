import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import { staggerContainer, fadeUp, buttonHover } from '../utils/animations';
import { links } from '../data/content';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Minimal background */}
      <div className="absolute inset-0">
        {/* Very subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/3 via-transparent to-pastel-blue/3"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 pt-20 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Simple badge */}
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-green/10 border border-pastel-green/20 rounded-full text-sm font-medium text-neutral-700 mb-8"
          >
            <span className="font-korean">Frontend Developer & UX Designer</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={fadeUp}
            className="text-4xl xs:text-5xl sm:text-6xl font-display text-neutral-900 mb-6 leading-tight"
          >
            <span className="block font-korean">사용자 중심의</span>
            <span className="block font-korean">웹을 만듭니다</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeUp}
            className="text-lg xs:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light font-korean"
          >
            디자인 감각과 기술적 역량으로, 사용자가 머무르고 싶은 
            <span className="font-medium text-neutral-800"> 디지털 경험</span>을 설계합니다
          </motion.p>

          {/* Simple tech stack */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {[
              { name: 'React', color: 'bg-pastel-blue' },
              { name: 'TypeScript', color: 'bg-pastel-green' },
              { name: 'Firebase', color: 'bg-pastel-pink' },
              { name: 'UX-driven', color: 'bg-pastel-blue' },
              { name: 'Deploy-ready', color: 'bg-pastel-green' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className={`px-3 py-1 ${tech.color} text-white rounded-full text-xs font-medium font-english`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16"
          >
            <motion.button
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              onClick={scrollToProjects}
              className="group relative px-6 py-3 bg-pastel-green text-white font-medium rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2 font-korean">
                프로젝트 보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.a
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-white text-neutral-800 font-medium rounded-xl border border-neutral-200 hover:border-pastel-green shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2 font-korean">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                이력서 다운로드
              </span>
            </motion.a>

            <motion.a
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-3 text-neutral-600 hover:text-neutral-800 font-medium rounded-xl hover:bg-neutral-100 transition-all duration-300"
            >
              <span className="flex items-center gap-2 font-english">
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                GitHub
              </span>
            </motion.a>
          </motion.div>

          {/* Simple stats */}
          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-pastel-green mb-1 font-english">{stat.number}</div>
                <div className="text-xs text-neutral-600 font-medium font-english">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-neutral-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
