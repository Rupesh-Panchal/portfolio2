// src/components/Projects/Projects.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/constants";

const ContentSection = styled.div`
  max-width: 1600px;
  border-radius: 12px;
  padding: 20px;
  line-height: 28px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-top: 20px;
  overflow: visible;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    justify-items: center; /* center cards */
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: #141c2f;
  border-radius: 20px;
  width: 33vw;
  height: 450px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.35s ease;
  border: 3px solid transparent; /* border thickness */

  /* gradient border using pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 23px; /* slightly more than card radius */
    background: linear-gradient(45deg, #ff7e5f, #feb47b, #6a11cb, #2575fc);
    z-index: 2;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 35px 65px rgba(0, 0, 0, 0.55);
    height: 550px;
  }

  .image-section {
    height: 50%;
    background-size: cover; /* fill fully */
    background-position: center;
    border-radius: 20px 20px 0 0;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  &:hover .image-section {
    transform: scale(1.05);
  }

  .text-section {
    padding: 15px;
    color: #fff;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .description {
      font-size: 1rem;
      margin-bottom: 15px;
    }

    .links a {
      color: #fff;
      text-decoration: none;
      margin-right: 15px;
      display: inline-flex;
      align-items: center;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <ContentSection>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <ProjectsGrid>
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // 20% visibility
              variants={cardVariants}
            >
              <div
                className="image-section"
                style={{ backgroundImage: `url(${proj.image})` }}
              />
              <div className="text-section">
                <div className="title">{proj.title}</div>
                <div className="description">{proj.description}</div>
                <div className="links">
                  {proj.github ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <FiExternalLink style={{ marginLeft: "6px" }} />
                    </a>
                  ) : (
                    <span>GitHub Not Available</span>
                  )}

                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <FiExternalLink style={{ marginLeft: "6px" }} />
                    </a>
                  ) : (
                    <span style={{ color: "#888", fontStyle: "italic" }}>
                      No Demo
                    </span>
                  )}
                </div>
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ContentSection>
  );
};

export default Projects;
