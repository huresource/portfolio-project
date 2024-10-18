'use client';

import { motion, AnimatePresence } from 'framer-motion';

import styles from '../styles';
import { slideIn, fadeIn, staggerContainer, textVariant, repeatAnim } from '../utils/motion';
import { listOfTitles, arrayOfTitles } from '../constants';
import { TypingText, Titles } from '../components';

const offsetx = [-100, 0, 100];
const offsety = [0, 100, 0];

const Hero = () => (
  <section className={`${styles.paddings}  sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Hi there!
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>I'm Priscilla.</h1>
          {/* <div className={styles.heroDText} /> */}
        </motion.div>
      </div>

      {/* <motion.p
        // variants={fadeIn('up', 'tween', 2, 1)}
        variants={textVariant(1.4)}
        className="pt-10 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        A <span className="font-extrabold text-white">freelance </span> <Titles/>
        based out of <span className="font-extrabold text-white">Denver, Colorado</span>.
      </motion.p> */}

      {/* <motion.div
        // variants={fadeIn('up', 'tween', 2, 1)}
        variants={textVariant(1.5)}
        className="mt-[50px] flex lg:flex-row flex-col w-full gap-[24px]"
      >
        {arrayOfTitles.map((title, i) => (
          <motion.span
          className={`relative flex flex-row items-center justify-center w-[33%] text-[20px] text-gray-300`}
            initial={{ x: `${offsetx[i]}vw`, y: `${offsety[i]}vw`, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            // exit={{ x: "100vw", y: "100vw", opacity: 0 }}
            transition={{ duration: 2, delay: 1.5 + (i * 1), type: "spring", bounce: 0.15 }}>
            {title}
          </motion.span>
        ))}      
      </motion.div> */}

      <Titles/>

      <motion.img
        variants={fadeIn('up', 'tween', 3.5, 1.5)}
        // variants={repeatAnim('loop', 10, 3)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
{/* 
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div> */}
    </motion.div>
  </section>
);

export default Hero;
