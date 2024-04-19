
import { motion } from 'framer-motion';

import styles from './styles';
import { insights } from './constants';
import { FeatureCard, TitleText, TypingText } from './components';
import {  staggerContainer } from './utils/motion';


const Features = () => (
  <section className={`${styles.paddings} relative z-10 justify-center items-center`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Values" textStyles="text-center" />
      <TitleText title={<>Our Values</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px] justify-center items-center">
        {insights.map((item, index) => (
          <FeatureCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Features;
