import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Database, Globe, Palette } from 'lucide-react';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { quickFacts } from '../data/content';

const About: React.FC = () => {
  const iconMap = {
    'graduation-cap': GraduationCap,
    'map-pin': MapPin,
    'code': Code,
    'database': Database,
    'globe': Globe,
    'palette': Palette
  };

  return (
    <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left Column - Content */}
        <motion.div variants={slideInLeft}>
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-green/20 border border-pastel-green/30 rounded-full text-sm font-medium text-neutral-700 mb-6"
          >
            <span className="font-korean">About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="text-3xl xs:text-4xl lg:text-5xl font-display text-neutral-900 mb-6 leading-tight"
          >
            <span className="font-korean">사용자·기술·팀을 잇는<br /></span>
            <span className="font-korean text-pastel-green">프론트엔드</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 text-neutral-600">
            <p className="text-lg leading-relaxed font-korean">
              기획부터 개발·배포까지 전체 흐름을 주도적으로 경험했습니다. 실사용자 대상 서비스에서{' '}
              <span className="font-semibold text-neutral-800 text-pastel-green">
                UX 설계 → 백엔드 연동 → 보안/권한 설정
              </span>까지 다룹니다.
            </p>

            <p className="text-lg leading-relaxed font-korean">
              꾸준한 학습과 기록으로 성장합니다. 스터디 발표, 블로그 회고, 실제 사용자 피드백 반영을 통해 빠르게 개선합니다.
            </p>

            <p className="text-lg leading-relaxed font-korean">
              팀을 이끌고 협업합니다. 요구사항 정리, 의사소통, 일정 조율을 통해{' '}
              <span className="font-semibold text-neutral-800 text-pastel-green">
                완성까지
              </span> 책임집니다.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Quick Facts */}
        <motion.div variants={slideInRight}>
          <div className="bg-neutral-50 rounded-3xl p-8 shadow-sm border border-neutral-100">
            <motion.h3 
              variants={fadeUp}
              className="text-2xl font-bold text-neutral-900 mb-8 font-korean"
            >
              Quick Facts
            </motion.h3>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {quickFacts.map((fact) => {
                const IconComponent = iconMap[fact.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={fact.text}
                    variants={fadeUp}
                    className="group p-4 bg-white rounded-2xl border border-neutral-100 hover:border-pastel-green hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pastel-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-neutral-800 font-korean">
                        {fact.text}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
