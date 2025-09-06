import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { SkillSet } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: 55px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  align-items: center;
  justify-items: center;

  /* shift the whole block slightly left */
  transform: translateX(-40px); /* adjust value as needed */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-left: 70px;
    margin-top: -50px;
    transform: translateX(0); /* reset on mobile */
  }
`;

const Skill = styled.div`
  width: 400px; /* bigger width */
  min-height: 250px; /* increase height */
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 36px; /* increase padding for bigger card content */

  @media (max-width: 768px) {
    width: 90%; /* responsive on mobile */
    min-height: 250px;
    padding: 24px;
  }

  @media (max-width: 500px) {
    width: 95%;
    min-height: 220px;
    padding: 16px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <SkillsContainer>
          {SkillSet.map((skill, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1, speed: 400 }}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, idx) => (
                    <SkillItem key={idx}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
