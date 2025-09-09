import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, Close } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  backdrop-filter: blur(5px);
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px; // match IntroSection max-width
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto; // center container
  padding: 0 80px; // same as IntroSection

  @media screen and (max-width: 768px) {
    padding: 0 20px; // match mobile padding of IntroSection
  }
`;
const NavLogo = styled(LinkR)`
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;

  color: ${({ theme }) => theme.primary};
  font-family: "Poppins", "Roboto", sans-serif;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  /* Shift logo a little right */
  margin-right: 48px;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.text_primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;

    justify-content: space-between;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    display: none;
    font-size: 16px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  position: relative;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  padding: 8px 18px; /* smaller height & width */
  font-size: 14px;
  font-weight: 600;
  transition: color 0.4s ease-in-out;
  text-decoration: none;
  margin-right: 100px;
  overflow: hidden; /* required for fill effect */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${({ theme }) => theme.primary + "55"};
    z-index: 0;
    transition: width 0.5s ease-in-out;
    border-radius: 25px;
  }

  &:hover::before {
    width: 100%; /* fill horizontally */
  }

  &:hover {
    color: white; /* text on top becomes white when filled */
  }

  span {
    position: relative;
    z-index: 1; /* keep text above fill */
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-right: 10px;
  }
`;

const MobileMenu = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen", // prevent passing isOpen to <ul>
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Rupesh Panchal</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Close style={{ color: "inherit" }} />
          ) : (
            <MenuRounded style={{ color: "inherit" }} />
          )}
        </MobileIcon>

        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#hero">About</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#home">
              Home
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#hero">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#portfolio">
              Portfolio
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#contact">
              Contact
            </NavLink>

            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            <span>Github Profile</span>
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
