import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Github, Calendar } from 'lucide-react';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { links } from '../data/content';

const Writing: React.FC = () => {
  const studyItems = [
    {
      title: 'TAVE 활동',
      description: '프론트엔드 개발 스터디 그룹에서 활발한 활동',
      period: '2024.03 - 현재',
      icon: '👥'
    },
    {
      title: '모던 리액트 Deep Dive',
      description: '완독 및 스터디 발표를 통한 심화 학습',
      period: '2024.06 - 2024.08',
      icon: '📚'
    },
    {
      title: '주간 스터디',
      description: '정기적인 기술 공유 및 코드 리뷰',
      period: '2024.01 - 현재',
      icon: '📅'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            Writing & Study
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            지식을 공유하고 학습하는 것을 즐깁니다. 블로그와 스터디를 통해 지속적으로 성장합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Blog Section */}
          <motion.div variants={slideInLeft} className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-base-content">Velog</h3>
                <p className="text-sm text-base-content/60">기술 블로그</p>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-6">
              <h4 className="font-semibold text-base-content mb-4">주요 글</h4>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  React 개념 정리 및 실무 적용 사례
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  CSS 애니메이션과 인터랙션 기법
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  프로젝트 회고 및 개선점 분석
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  개발 환경 설정 및 도구 활용법
                </li>
              </ul>

              <motion.a
                href={links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-primary hover:text-primary/80 font-medium"
                whileHover={{ x: 5 }}
              >
                블로그 방문하기
                <ExternalLink className="w-4 h-4 ml-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* Study Section */}
          <motion.div variants={slideInRight} className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Github className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-base-content">Study</h3>
                <p className="text-sm text-base-content/60">학습 활동</p>
              </div>
            </div>

            <div className="space-y-4">
              {studyItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-base-200 rounded-xl p-4"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-base-content">{item.title}</h4>
                        <div className="flex items-center space-x-1 text-xs text-base-content/60">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-base-content/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium"
              whileHover={{ x: 5 }}
            >
              Study GitHub 방문하기
              <ExternalLink className="w-4 h-4 ml-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Learning Philosophy */}
        <motion.div 
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-base-content mb-4">
              학습 철학
            </h3>
            <p className="text-base-content/70 max-w-3xl mx-auto">
              "배운 것을 기록하고 공유하는 것이 가장 효과적인 학습 방법입니다. 
              블로그 작성과 스터디 활동을 통해 지식을 체계화하고, 
              다른 개발자들과의 소통을 통해 새로운 관점을 얻습니다."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Writing;
