'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const SkillsCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 1)}
    className="md:w-[220px] w-full h-[200px] rounded-[32px] py-3 px-3 table text-[6em] border text-white text-center align-middle"
  >
     {imgUrl}

  </motion.div>
);

export default SkillsCard;