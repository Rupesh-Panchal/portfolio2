import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  background-color: #111928;
  color: #eee;
  padding: 20px 20px; /* reduced padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* reduced gap */
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }
`;

const FooterBrand = styled.div`
  font-size: 20px; /* slightly smaller */
  font-weight: 700;
  background: linear-gradient(90deg, #d92585, #fdc830);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #eee;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.3s ease;

    &:hover {
      color: #7d51cfff;
    }
  }
`;

const FooterText = styled.div`
  font-size: 13px; /* smaller text */
  color: #aaa;
  text-align: center;
`;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <FooterContainer>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <FooterBrand>YourName</FooterBrand>
      </motion.div>

      <FooterContent>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        ></motion.div>
      </FooterContent>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <FooterText>
          © {new Date().getFullYear()} YourName. All rights reserved.
        </FooterText>
      </motion.div>
    </FooterContainer>
  );
};

export default Footer;
