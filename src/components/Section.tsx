import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <section id={id} className={`py-12 xs:py-16 sm:py-20 md:py-24 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
