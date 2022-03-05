import styled from "styled-components";
import { StyledAbout, StyledHide } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledHide>
      <StyledFaq
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>
          Any Questions? <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, tempore!
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, tempore!
              </p>
            </div>
          </Toggle>
          <Toggle title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, tempore!
              </p>
            </div>
          </Toggle>
          <Toggle title="What products do you offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, tempore!
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </StyledFaq>
    </StyledHide>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: #23d997;
    }
  }
  .active {
    color: #23d997;
    &:hover {
      color: white;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
