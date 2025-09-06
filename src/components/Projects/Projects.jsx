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
  }
`;

const ProjectCard = styled(motion.div)`
  background: #141c2f;
  border-radius: 20px;
  width: 33vw;
  height: 450px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  justify-content: space-between;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.35s ease;
  position: relative;
  border: 3px solid #555;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 3px;
    background: linear-gradient(45deg, #ff7e5f, #feb47b, #6a11cb, #2575fc);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    height: 650px;
    box-shadow: 0 35px 65px rgba(0, 0, 0, 0.55);
    border-color: transparent;
  }

  .image-section {
    height: 50%;
    background-size: contain;
    background-position: center;
    border-radius: 20px 20px 0 0;
  }

  .text-section {
    height: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 25px;
      font-weight: 600;
      color: #c9daff;
      margin: 8px 15px;
    }

    .description {
      font-size: 12px;
      margin: 8px 15px;
      line-height: 1.4;
      color: ${({ theme }) => theme.text_secondary};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      transition: all 0.3s ease;
    }

    &:hover .description {
      -webkit-line-clamp: unset;
    }

    .links {
      display: flex;
      padding-top: 60px;
      justify-content: flex-end;
      gap: 20px;

      a {
        color: #448febff;
        text-decoration: none;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        gap: 6px;

        &:hover {
          color: #688bb7;
        }
      }

      span {
        color: #888;
        font-style: italic;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    &:hover {
      height: auto;
    }

    .image-section {
      height: 150px;
      background-size: contain;
      background-position: center;
      border-radius: 20px 20px 0 0;
    }

    .text-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 15px;

      .title {
        font-size: 15px;
        margin: 2px 2px;
      }

      .description {
        font-size: 12px;
        margin: 2px 2px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: all 0.3s ease;
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
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <ProjectsGrid>
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
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
                    <span>No Demo</span>
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
