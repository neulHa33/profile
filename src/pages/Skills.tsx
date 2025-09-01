import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';
import { skills } from '../data/content';

const Skills: React.FC = () => {
  const skillCategories = [
    { 
      title: 'Frontend', 
      skills: skills.fe, 
      color: 'pastel-blue',
      bgColor: 'bg-pastel-blue/10',
      borderColor: 'border-pastel-blue/20'
    },
    { 
      title: 'Backend & Database', 
      skills: skills.be, 
      color: 'pastel-green',
      bgColor: 'bg-pastel-green/10',
      borderColor: 'border-pastel-green/20'
    },
    { 
      title: 'Tools & APIs', 
      skills: skills.tools, 
      color: 'pastel-pink',
      bgColor: 'bg-pastel-pink/10',
      borderColor: 'border-pastel-pink/20'
    },
    { 
      title: 'Testing', 
      skills: skills.test, 
      color: 'pastel-blue',
      bgColor: 'bg-pastel-blue/10',
      borderColor: 'border-pastel-blue/20'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-green/20 border border-pastel-green/30 rounded-full text-sm font-medium text-neutral-700 mb-6"
          >
            <span className="font-korean">Skills & Technologies</span>
          </motion.div>

          <h2 className="text-3xl xs:text-4xl lg:text-5xl font-display text-neutral-900 mb-6 font-korean">
            기술 스택
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-korean">
            다양한 기술 스택을 활용하여 사용자 중심의 웹 애플리케이션을 개발합니다.
            각 기술은 실제 프로젝트에서 검증된 경험을 바탕으로 합니다.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              transition={{ delay: categoryIndex * 0.1 }}
              className={`${category.bgColor} rounded-3xl p-8 border ${category.borderColor} shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-${category.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg font-english">{category.title.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 font-korean">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className={`px-4 py-2 bg-white text-neutral-800 text-sm font-semibold rounded-xl border border-neutral-200 hover:border-${category.color} shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-default font-english`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <div className="bg-neutral-50 rounded-3xl p-8 shadow-sm border border-neutral-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 font-korean">
                개발 철학
              </h3>
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto font-korean">
              사용자 경험을 최우선으로 하며, 깔끔하고 유지보수가 용이한 코드를 작성합니다. 
              새로운 기술에 대한 학습을 게을리하지 않고, 실무에 적용할 수 있는 실용적인 솔루션을 추구합니다.
              <span className="block mt-4 font-semibold text-neutral-800">
                "좋은 코드는 읽기 쉽고, 좋은 UX는 사용하기 쉽다"
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
