'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, websiteLink, title, description, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] w-full text-left text-clip">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex w-full flex-row flex-wrap justify-between bg-[rgba(0,0,0,0.8)] rounded-b-[24px] items-center">

        <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <a
          href={websiteLink}
          target='_blank'
          className={`${styles.flexCenter} w-[30px] h-[30px] rounded-[24px] glassmorphism`}
        >
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-1/2 h-1/2 object-contain"
          />
        </a>
        <p className="font-normal text-[16px] leading-[22px] text-white">
          {description}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
