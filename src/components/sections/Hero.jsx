import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypeWriter from "typewriter-effect";
import picofme from "../../images/picofme.png";
import { HeroBgAnimation } from "../HeroBgAnimation";
import { motion } from "framer-motion"; // For motion
import Tilt from "react-parallax-tilt"; // For titlt effect
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

// === STYLES (only changed where needed) ===
const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  max-width: 1200px;
  padding: 10px 80px;
  z-index: 1;
  width: 100%;

  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-left: 8px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
  }
`;

const HeroLeftContainer = styled(motion.div)`
  // motion.div for animation
  width: 100%;
  order: 1;
  margin-left: 10px;

  @media (max-width: 768px) {
    order: 2;

    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center; /* ✅ center content */
    text-align: center;
    padding-right: 20px;
  }
`;

const HeroRightContainer = styled(motion.div)`
  // motion.div for animation
  width: auto; /* was 100% */
  order: 2;
  margin-right: 70px;

  @media (max-width: 768px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center; /* ✅ center image */
    justify-content: center;
    margin: 0 0 40px 0;
  }
`;

const SectionHeading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  margin: 0;
  background: linear-gradient(90deg, #d92585, #fdc830);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HiText = styled.div`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #ff416c 0%, #3f2b96 100%);

  -webkit-background-clip: text; /* Chrome, Safari */
  -webkit-text-fill-color: transparent; /* Chrome, Safari */
  background-clip: text; /* Firefox */
  color: transparent;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const NameText = styled.div`
  font-size: 40px;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 52px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  gap: 8px; /* was 12px */
  line-height: 40px; /* was 68px */
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 510px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 768px) {
    text-align: justify;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  appearance: button;
  text-decoration: none;
  cursor: pointer;

  width: 150px;
  max-width: 200px;
  text-align: center;
  padding: 16px 0;

  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    align-self: flex-start;
    padding: 12px 0;
    font-size: 16px;
    width: 200px;
  }

  color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 480px; /* was 400px */
  max-height: 480px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;

  transform: translateX(-46%) translateY(-46%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

// === Animation Variants ===
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, // 👈 control parent speed
      ease: "easeOut",
      staggerChildren: 0.3, // delay each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // 👈 control child speed
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div id="hero">
      <SectionHeading>About Me</SectionHeading>
      <HeroContainer>
        <StarCanvas />
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            {/* LEFT SIDE - slides from left */}
            <HeroLeftContainer
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0 }}
            >
              <HiText variants={itemVariants}>Hello, I am</HiText>
              <NameText variants={itemVariants}>{Bio.name}</NameText>
              <motion.div {...headTextAnimation}>
                <TextLoop variants={itemVariants}>
                  I am a{" "}
                  <Span>
                    <TypeWriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle variants={itemVariants}>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton
                href="/rupesh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>

            {/* RIGHT SIDE - slides from bottom */}
            <HeroRightContainer
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0 }}
            >
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={picofme} alt="Picture of Me" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
