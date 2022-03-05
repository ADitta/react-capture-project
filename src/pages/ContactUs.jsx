import React from "react";

// animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send Us A Message</h2>
          </StyledSocial>
        </StyledHide>

        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send an email</h2>
          </StyledSocial>
        </StyledHide>

        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Social Media</h2>
          </StyledSocial>
        </StyledHide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
    font-size: 0.5rem;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
  @media (max-width: 1300px) {
    margin-left: 20%;
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
  }
`;
const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 720px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
export default ContactUs;
