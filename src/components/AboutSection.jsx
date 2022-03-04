import React from "react";
import home1 from "../img/home1.png";
// Styled
import {
  StyledDescription,
  StyledAbout,
  StyledImage,
  StyledHide,
} from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>

      <StyledImage>
        <motion.img
          variants={photoAnim}
          // initial="hidden"
          // animate="show"
          src={home1}
          alt="guy with camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

// Styled Components

export default AboutSection;
