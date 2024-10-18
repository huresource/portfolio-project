'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { listOfTitles } from '../constants';
import { Titles, TitleText, TypingText, HeaderText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const MyTitles = () => (

  <section className={`${styles.paddings}`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
  >
    <TypingText title="| Projects" textStyles="text-center" />
    <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        A <span className="font-extrabold text-white">freelancer </span> 
        based out of <span className="font-extrabold text-white">Denver, Colorado</span>.
      </motion.p>
    <div className="mt-[50px] flex lg:flex-row flex-col w-full gap-[24px]">
          {listOfTitles.map((title, index) => (
              <Titles
              key={title}
              {...title}
              index={index}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              />
          ))}
       </div>

    </motion.div>
  </section>
);

export default MyTitles;
