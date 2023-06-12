import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Tech-Stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Tools.</h2>
      </motion.div>
      <div className='w-100 flex flex-row flex-wrap justify-center gap-10 mt-20 flex flex-wrap gap-10' >
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");