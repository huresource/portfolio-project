'use client';

import React, { useState, useEffect } from "react";
import styles from '../styles';
import { motion, AnimatePresence, delay } from 'framer-motion';
import { fadeIn, repeatAnim, textVariant } from '../utils/motion';
import { listOfTitles, arrayOfTitles } from '../constants';


const offsetx = [-100, 0, 100];
const offsety = [0, 100, 0];
const variants = {
    enter: direction => {
      return {
        // y: 20,
        // zIndex: 2,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
    //   y: 0,
      opacity: 1
    },
    exit: direction => {
      return {
        // y: -100,
        zIndex: 0,
        opacity: 0
      };
    }
  };


const Titles = ({ number, title, item }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        let next = index + 1;
        if (next === arrayOfTitles.length) {
            next = 0;
        }
        setIndex(next);
        }, 4 * 1000);
    }, [index, setIndex]);
  
    return (
      <motion.div variants={textVariant(1.5)} className="pt-10 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        A <span className="font-extrabold text-white">freelance</span> {""}
        <motion.span
            // style={{ position: "absolute" }}
            variants={variants}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                y: { type: "spring", stiffness: 300, damping: 200 },
                opacity: { duration: 1 }
            }}
        >
        {arrayOfTitles[index]}
        </motion.span>
        {""} based out of <span className="font-extrabold text-white">Denver, Colorado</span>.
      </motion.div>
    );
};

export default Titles;
