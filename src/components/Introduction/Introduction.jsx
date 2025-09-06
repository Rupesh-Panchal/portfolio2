import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import TypeWriter from "typewriter-effect";
import myGif from "../../images/mygif.gif";
import StarCanvas from "../canvas/Stars";

// Floating animation for the right side circle
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  margin-bottom: 50px;
  padding: 43px 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left; /* force text left */
    align-items: center; /* align children to left */
    padding: 20px 20px;
  }
`;

// Left content slides in from bottom
const slideInUp = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const Left = styled.div`
  flex: 1;
  color: white;
  animation: ${slideInUp} 0.5s ease-out forwards;

  @media (max-width: 768px) {
    text-align: left; /* keep text aligned left */
    align-items: flex-start; /* prevent centering */
    width: 100%; /* make it stretch full width */
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 45px;
  margin: 0;
  background: linear-gradient(90deg, #d92585, #fdc830);
  -webkit-background-clip: text;
  color: transparent;

  opacity: 0;
  animation: ${slideInUp} 0.6s ease-out forwards;
  animation-delay: 0.1s;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubTitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
  margin: 12px 0 20px;
  color: #ece3c9ff;

  opacity: 0;
  animation: ${slideInUp} 0.6s ease-out forwards;
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #c4c4c4;
  max-width: 600px;
  line-height: 1.6;

  opacity: 0;
  animation: ${slideInUp} 0.6s ease-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

// Container for each row of buttons
const ButtonRow = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 15px;

  opacity: 0;
  animation: ${slideInUp} 0.6s ease-out forwards;
  animation-delay: 0.7s;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

// Rectangular button (Projects, Hire Me)
const Button = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary + "90"};
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  margin-right: 16px;
  transition: all 0.4s ease-in-out;

  /* Glow effect */
  box-shadow: 0 0 10px ${({ theme }) => theme.primary + "70"},
    0 0 20px ${({ theme }) => theme.primary + "50"};

  &:hover {
    background: ${({ theme }) => theme.primary + "55"};
    color: white;
    box-shadow: 0 0 20px ${({ theme }) => theme.primary + "90"},
      0 0 40px ${({ theme }) => theme.primary + "70"}; /* intensify glow */
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
    transition: width 0.4s ease-in-out;
    border-radius: 10px;
  }

  &:hover::before {
    width: 100%;
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin-right: 10px; /* keep some horizontal gap */
    margin-bottom: 0; /* prevent stacking */
    padding: 12px 30px;
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 20px; /* now works properly */
  margin-top: 25px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 40px; /* smaller gap on mobile */
  }
`;

// Icon buttons (LinkedIn, GitHub)
const IconButton = styled.a`
  width: 50px;
  height: 50px;
  margin: 10px;

  border-radius: 50%; /* make it a circle */
  background: transparent; /* no fill color */
  border: 2px solid ${({ theme }) => theme.primary}; /* outline instead of fill */

  display: flex;
  align-items: center;
  justify-content: center; /* center icon */
  color: ${({ theme }) => theme.primary}; /* icon color */
  font-size: 28px; /* bigger icon size */
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  /* Glow effect */
  box-shadow: 0 0 10px ${({ theme }) => theme.primary + "70"},
    0 0 20px ${({ theme }) => theme.primary + "50"};

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px ${({ theme }) => theme.primary + "90"},
      0 0 40px ${({ theme }) => theme.primary + "70"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Right image slides in from right
const slideInRight = keyframes`
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: 60px;
  position: relative;
  animation: ${slideInRight} 1s ease-out forwards; /* from right */
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    width: 100%; /* full width in mobile */
    justify-content: center; /* center the GIF */
    margin-top: 20px;
    margin-left: 25px;
  }
`;

const RightImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;

  /* subtle lighting/glow effect */
  filter: drop-shadow(0 0 30px rgba(255, 42, 146, 0.5))
    drop-shadow(0 0 20px rgba(109, 50, 177, 0.4));

  &:hover {
    transform: rotate(10deg) scale(1.1); /* rotate more and enlarge */
    filter: drop-shadow(0 0 50px rgba(255, 42, 146, 0.7))
      drop-shadow(0 0 40px rgba(109, 50, 177, 0.6));
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const IntroSection = () => {
  return (
    <IntroContainer id="home">
      <StarCanvas />
      <Left>
        <Title>Full Stack </Title>
        <Title>Developer</Title>
        <SubTitle>
          <TypeWriter
            options={{
              strings: ["Tech Enthusiast"], // you can add more if you want
              autoStart: true,
              loop: true,
            }}
          />
        </SubTitle>
        <Description>
          A passionate Software Developer crafting elegant solutions through
          code. Specializing in full-stack development and creative UI/UX
          design.
        </Description>

        {/* First row: Projects & Hire Me */}
        <ButtonRow>
          <Button href="#projects">
            <span>Projects</span>
          </Button>
          <Button href="#contact">
            <span>Hire Me</span>
          </Button>
        </ButtonRow>

        {/* Second row: LinkedIn & GitHub */}
        <IconRow>
          <IconButton href={Bio.linkedin} target="_blank">
            <CiLinkedin />
          </IconButton>
          <IconButton href={Bio.github} target="_blank">
            <FiGithub />
          </IconButton>
        </IconRow>
      </Left>

      <Right>
        <RightImg src={myGif} alt="Animated GIF" />
      </Right>
    </IntroContainer>
  );
};

export default IntroSection;
