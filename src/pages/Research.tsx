import React from 'react';
import { motion } from 'framer-motion';
import { Award, FlaskConical, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { research } from '../data/content';

const Research: React.FC = () => {
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
            Research & Awards
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            UX 연구와 학술 활동을 통해 사용자 중심의 디자인을 실현합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* IAE LAB */}
          <motion.div variants={slideInLeft} className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-base-content">IAE LAB</h3>
                <p className="text-sm text-base-content/60">UX 실험 기반 시뮬레이션</p>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-6">
              <h4 className="font-semibold text-base-content mb-3">주요 활동</h4>
              <ul className="space-y-2 text-base-content/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Figma를 활용한 인터페이스 설계
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  사용자 시나리오 및 행동 패턴 분석
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  행동 데이터 수집 및 분석
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  인터페이스 개선안 도출 및 검증
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div variants={slideInRight} className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-base-content">Awards</h3>
                <p className="text-sm text-base-content/60">대한인간공학회 캡스톤 디자인 우수상</p>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <h4 className="font-semibold text-base-content">2024년 수상</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-base-content mb-2">프로젝트</h5>
                  <p className="text-base-content/80 text-sm">
                    건강검진 UX 시뮬레이션 설계 및 개발
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium text-base-content mb-2">수상 부문</h5>
                  <p className="text-base-content/80 text-sm">
                    학부생 논문 부문 우수상
                  </p>
                </div>

                <div className="bg-secondary/10 rounded-lg p-3">
                  <p className="text-sm text-secondary font-medium">
                    "사용자 경험을 중심으로 한 혁신적인 건강검진 시스템 설계"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Research Info */}
        <motion.div 
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-base-content mb-4">
              연구 방향성
            </h3>
            <p className="text-base-content/70 max-w-3xl mx-auto">
              사용자 중심의 디자인과 기술적 구현을 연결하는 연구를 진행합니다. 
              실제 사용자의 행동 데이터를 기반으로 한 UX 개선과, 
              이를 실현할 수 있는 기술적 솔루션을 함께 고민합니다.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Research;
