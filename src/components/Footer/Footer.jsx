import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  background-color: #111928;
  color: #eee;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }
`;

const FooterBrand = styled.div`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #d92585, #fdc830);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #eee;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;

    &:hover {
      color: #7d51cfff;
    }
  }
`;

const FooterText = styled.div`
  font-size: 14px;
  color: #aaa;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrand>YourName</FooterBrand>

      <FooterContent>
        <FooterLinks>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
        </FooterLinks>
        <FooterText>
          © {new Date().getFullYear()} YourName. All rights reserved.
        </FooterText>
      </FooterContent>

      <FooterText>
        © {new Date().getFullYear()} YourName. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
