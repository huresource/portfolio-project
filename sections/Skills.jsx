'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { SkillsCard, TitleText, TypingText } from '../components';

const Skills = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| What I Use" textStyles="text-center" />
      <TitleText title={<>Skills, Tools & Platforms</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-row flex-wrap justify-center gap-[30px]">
        {insights.map((item, index) => (
          <SkillsCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
