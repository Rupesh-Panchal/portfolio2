import React, { useState } from "react";
import styled from "styled-components";
import StarCanvas from "../canvas/Stars";
import { HeroBgAnimation } from "../HeroBgAnimation";
import { motion } from "framer-motion";
import Ripple from "../Ripple/Ripple";
import Projects from "../Projects/Projects";
import Skills from "../Projects/Skills";
import Certificates from "../Projects/Certificates";
import { FiAward, FiCode } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { LuComputer } from "react-icons/lu";

// === STYLES ===
const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 20px 30px;
  margin: 0 auto;
  z-index: 1;
  overflow: visible;
  margin-top: 25px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const PortfolioInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  position: relative;
`;

const SectionHeading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  margin-top: 65px;
  background: linear-gradient(90deg, #d92585, #fdc830);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubHeading = styled.p`
  max-width: 600px;
  text-align: center;
  margin: 0 auto 40px auto;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: justify;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  z-index: -1; /* ✅ keep behind cards */
  pointer-events: none;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72vw;
  height: 7vw;
  margin-bottom: 40px;
  background: ${({ theme }) => `${theme.bgLight}55`};
  border-radius: 12px;
  overflow: hidden;
  gap: 18px;

  @media (max-width: 960px) {
    width: 90vw;
    height: 20vw;
  }
`;

const TabButton = styled.button`
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: 16px 16px;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background: ${({ $active, theme }) =>
    $active ? theme.primary + "33" : "transparent"};
  color: ${({ $active }) => ($active ? "#fff" : "#aaa")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    background: ${({ theme }) => theme.primary + "33"};
    color: #fff;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 12px;
  }
`;

const ContentSection = styled.div`
  max-width: 1600px;
  border-radius: 12px;
  padding: 20px;
  line-height: 28px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Projects", icon: <FaCode /> },
    { id: "certificates", label: "Certificates", icon: <FiAward /> },
    { id: "techstack", label: "Skills", icon: <LuComputer /> },
  ];

  return (
    <div id="portfolio">
      <SectionHeading>Portfolio Showcase</SectionHeading>
      <PortfolioContainer>
        <StarCanvas />
        <HeroBg />

        <PortfolioInner>
          {/* Tabs */}
          <TabContainer>
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                $active={activeTab === tab.id} // use $active instead of active
                onClick={() => setActiveTab(tab.id)}
              >
                <Ripple duration={600} color="rgba(255,255,255,0.3)">
                  <div
                    className="tab-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      transition: "all 0.3s ease",
                      color: activeTab === tab.id ? "#6864F1" : "#aaa", // ✅ change color
                    }}
                  >
                    <div
                      className="tab-icon"
                      style={{
                        fontSize: "24px",
                        transition: "all 0.3s ease",
                        color: activeTab === tab.id ? "#6864F1" : "#aaa", // ✅ change color
                      }}
                    >
                      {tab.icon}
                    </div>
                    <div
                      className="tab-label"
                      style={{
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        color: activeTab === tab.id ? "#6864F1" : "#aaa", // ✅ change color
                      }}
                    >
                      {tab.label}
                    </div>
                  </div>
                </Ripple>
              </TabButton>
            ))}
          </TabContainer>
          {/* Panels */}
          {activeTab === "projects" && <Projects />} {/* ✅ clean */}
          {activeTab === "certificates" && <Certificates />}
          {activeTab === "techstack" && (
            <ContentSection>
              <Skills />
            </ContentSection>
          )}
        </PortfolioInner>
      </PortfolioContainer>
    </div>
  );
};

export default Portfolio;
