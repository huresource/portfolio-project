'use client';

import { motion } from 'framer-motion';
import { TypingText, Titles } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { listOfTitles } from '../constants';

const About = () => (
  <section className={`sm:p-4 xs:p-8 px-6 py-12 relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        A <span className="font-extrabold text-white">freelancer </span> 
        based out of <span className="font-extrabold text-white">Denver, Colorado</span>.
      </motion.p>

      <motion.div
        variants={fadeIn('left', 'tween', 3, 2)}
        className="mt-[50px] flex lg:flex-row flex-col w-full gap-[24px]"
      >
          {listOfTitles.map((title, index) => (
              <Titles
              key={title}
              {...title}
              index={index}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              />
          ))}
       </motion.div>

      <motion.img
        variants={fadeIn('up', 'tween', 3.5, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
