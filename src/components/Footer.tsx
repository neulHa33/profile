import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart } from 'lucide-react';
import { links } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-12 xs:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pastel-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-2xl font-bold text-neutral-900 font-korean">
                문하늘
              </span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed font-korean">
              사용자 중심의 웹 경험을 설계하는 프론트엔드 개발자
            </p>
            <p className="text-neutral-500 text-xs font-korean">
              쓰이고 싶은 웹을 만듭니다
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-neutral-900 text-lg font-korean">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 hover:translate-x-1 transform inline-block font-english"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="font-bold text-neutral-900 text-lg font-korean">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-200 rounded-xl flex items-center justify-center hover:bg-pastel-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-200 rounded-xl flex items-center justify-center hover:bg-pastel-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-neutral-600 text-sm mt-4 font-korean">
              새로운 프로젝트나 협업 기회에 대해 이야기해보고 싶습니다.
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-neutral-200 mt-8 pt-8 text-center"
        >
          <p className="text-sm text-neutral-500 font-korean">
            © 2024 문하늘. All rights reserved. Made with{' '}
            <Heart className="inline w-4 h-4 text-pastel-green animate-bounce-gentle" />
            {' '}and lots of coffee ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 