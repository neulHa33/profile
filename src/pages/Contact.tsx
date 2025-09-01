import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { links } from '../data/content';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS 설정 (실제 사용 시 YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY로 변경)
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // EmailJS 서비스 ID
        'YOUR_TEMPLATE_ID', // EmailJS 템플릿 ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // EmailJS 공개 키
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp} className="text-center mb-12 xs:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-neutral-900 mb-3 xs:mb-4">
            Let's Connect
          </h2>
          <p className="text-base xs:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            새로운 프로젝트나 협업 기회에 대해 이야기해보고 싶습니다. 
            언제든지 연락주세요!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
          {/* Contact Methods */}
          <motion.div variants={slideInLeft} className="space-y-4 xs:space-y-6">
            <h3 className="text-xl xs:text-2xl font-semibold text-neutral-900 mb-4 xs:mb-6">
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
                  className="flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-pastel-green/10 rounded-lg flex items-center justify-center group-hover:bg-pastel-green/20 transition-colors flex-shrink-0">
                    <method.icon className="w-5 h-5 xs:w-6 xs:h-6 text-pastel-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-900 text-sm xs:text-base">{method.title}</h4>
                    <p className="text-neutral-600 text-xs xs:text-sm truncate">{method.value}</p>
                    <p className="text-neutral-500 text-xs mt-0.5 xs:mt-1">{method.description}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 text-neutral-400 group-hover:text-pastel-green transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={slideInRight} className="space-y-4 xs:space-y-6">
            <h3 className="text-xl xs:text-2xl font-semibold text-neutral-900 mb-4 xs:mb-6">
              메시지 보내기
            </h3>
            
            <div className="bg-neutral-50 rounded-xl p-4 xs:p-5 sm:p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 xs:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-neutral-900 mb-1.5 xs:mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-green focus:border-transparent text-sm xs:text-base"
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-neutral-900 mb-1.5 xs:mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-green focus:border-transparent text-sm xs:text-base"
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-neutral-900 mb-1.5 xs:mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-green focus:border-transparent resize-none text-sm xs:text-base"
                    placeholder="메시지를 입력하세요"
                    required
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-700">메시지가 성공적으로 전송되었습니다!</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-red-700">메시지 전송에 실패했습니다. 다시 시도해주세요.</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-pastel disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      전송 중...
                    </div>
                  ) : (
                    <>
                      <Send className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                      메시지 보내기
                    </>
                  )}
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
          <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-blue/10 rounded-xl p-4 xs:p-6 sm:p-8">
            <h3 className="text-lg xs:text-xl font-semibold text-neutral-900 mb-3 xs:mb-4">
              함께 일하고 싶은 분들
            </h3>
            <p className="text-sm xs:text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
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
