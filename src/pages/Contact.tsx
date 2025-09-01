import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, Send } from 'lucide-react';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { links } from '../data/content';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: links.email,
      href: `mailto:${links.email}`,
      description: '가장 빠른 연락 방법입니다.'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/neulHa33',
      href: links.github,
      description: '프로젝트와 코드를 확인하세요.'
    },
    {
      icon: ExternalLink,
      title: 'Blog',
      value: 'velog.io/@neulhaaaa',
      href: links.blog,
      description: '기술 블로그에서 더 많은 내용을 보세요.'
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
        <motion.div variants={fadeUp} className="text-center mb-12 xs:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-base-content mb-3 xs:mb-4">
            Let's Connect
          </h2>
          <p className="text-base xs:text-lg text-base-content/70 max-w-2xl mx-auto px-2">
            새로운 프로젝트나 협업 기회에 대해 이야기해보고 싶습니다. 
            언제든지 연락주세요!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
          {/* Contact Methods */}
          <motion.div variants={slideInLeft} className="space-y-4 xs:space-y-6">
            <h3 className="text-xl xs:text-2xl font-semibold text-base-content mb-4 xs:mb-6">
              연락 방법
            </h3>
            
            <div className="space-y-3 xs:space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors group"
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <method.icon className="w-5 h-5 xs:w-6 xs:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base-content text-sm xs:text-base">{method.title}</h4>
                    <p className="text-base-content/70 text-xs xs:text-sm truncate">{method.value}</p>
                    <p className="text-base-content/50 text-xs mt-0.5 xs:mt-1">{method.description}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 text-base-content/40 group-hover:text-primary transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={slideInRight} className="space-y-4 xs:space-y-6">
            <h3 className="text-xl xs:text-2xl font-semibold text-base-content mb-4 xs:mb-6">
              메시지 보내기
            </h3>
            
            <div className="bg-base-200 rounded-xl p-4 xs:p-5 sm:p-6">
              <form className="space-y-3 xs:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-base-content mb-1.5 xs:mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm xs:text-base"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-base-content mb-1.5 xs:mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm xs:text-base"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-base-content mb-1.5 xs:mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm xs:text-base"
                    placeholder="메시지를 입력하세요"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full btn btn-primary btn-sm xs:btn-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                  메시지 보내기
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div 
          variants={fadeUp}
          className="mt-8 xs:mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 xs:p-6 sm:p-8">
            <h3 className="text-lg xs:text-xl font-semibold text-base-content mb-3 xs:mb-4">
              함께 일하고 싶은 분들
            </h3>
            <p className="text-sm xs:text-base text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              사용자 경험을 중요하게 생각하는 팀과 함께 일하고 싶습니다. 
              새로운 기술에 대한 학습 의지가 강하고, 
              팀워크를 통해 더 나은 결과물을 만들어내는 것을 즐깁니다.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
