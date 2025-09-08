import React, { useState } from "react";
import styled from "styled-components";
import { PiShareNetworkThin } from "react-icons/pi";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";
import StarCanvas from "../canvas/Stars";
import { Bio } from "../../data/constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiShareNetworkBold } from "react-icons/pi";
import { SiGitconnected } from "react-icons/si";

// Styled components (same as your original)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 12px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  background: linear-gradient(90deg, #d92585, #fdc830);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: #aaa;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: #100d21;
  gap: 16px;
`;

const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-bottom: -8px;
  font-weight: 700;
  gap: 8px;
  color: #7d51cfff;
`;

const ContactSubtitle = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
  color: #aaa;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #eee;
  font-size: 16px;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  min-height: 45px;
  border-radius: 10px;
  background: rgba(127, 90, 240, 0.1);
  color: #7d51cfff;
  font-size: 22px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #aaa;
`;

const Value = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #eee;
  word-break: break-word;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border-radius: 12px;
  border: 1px solid rgba(170, 170, 170, 0.5);
  background: transparent;
  color: #eee;
  font-size: 16px;
  outline: none;
  &:focus {
    border: 1px solid #7f5af0;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border-radius: 12px;
  border: 1px solid rgba(170, 170, 170, 0.5);
  background: transparent;
  color: #eee;
  font-size: 16px;
  outline: none;
  resize: vertical;
  line-height: 1.5;
  padding-top: 14px;

  &:focus {
    border: 1px solid #7f5af0;
  }
  &::placeholder {
    color: #aaa;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #7d51cfff;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #eee;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

const ResultMessage = styled.p`
  color: ${({ success }) => (success ? "#4BB543" : "#FF4136")};
  margin-top: 10px;
  font-weight: 600;
  text-align: center;
`;

const ConnectSection = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ConnectTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fdfdfd;
  display: flex; /* make it flex */
  align-items: center; /* vertically center icon with text */
  gap: 8px;
`;

const ConnectCard = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: #373e4e;
  background: transparent;
  border: 1px solid rgba(170, 170, 170, 0.5);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #eee;
  margin-bottom: 10px;
  transition: all 0.3s ease;

  /* Shimmer overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0.05) 60%,
      transparent 80%
    );
    transform: skewX(-20deg);
  }

  &:hover::before {
    animation: shimmer 1.2s forwards;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @keyframes shimmer {
    0% {
      left: -150%;
    }
    100% {
      left: 150%;
    }
  }
`;

const LinkedInIcon = styled(FaLinkedin)`
  color: #0077b5; /* LinkedIn brand blue */
  border-radius: 10px;
  width: 38px;
  height: 38px;
`;

const GitHubIcon = styled(FaGithub)`
  color: #eee; /* GitHub black */
  border-radius: 10px;
  width: 38px;
  height: 38px;
`;

const CardLabel = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 4px;
  background: #2e3d50;
  margin-top: 20px; /* center + spacing below */
`;

const ConnectIcon = styled(SiGitconnected)`
  color: #7d51cfff; /* your desired color */
  width: 28px; /* adjust width */
  height: 28px;
  gap: 20px; /* adjust height */
`;

// Contact component
const Contact = () => {
  const [result, setResult] = useState({ message: "", success: false });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult({ message: "Sending...", success: false });

    const form = event.target;
    const data = {
      access_key: "7ab813cd-dc68-475f-bf39-f0094778f9d5",
      subject: "New Contact Form Submission",
      Name: form.from_name.value,
      Email: form.from_email.value,
      Message: form.message.value,
      redirect: "https://web3forms.com/success",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setResult({ message: "Message Sent Successfully ✅", success: true });
        form.reset();
      } else {
        setResult({
          message: result.message || "Something went wrong ❌",
          success: false,
        });
      }
    } catch (error) {
      setResult({ message: "Network Error ❌", success: false });
    }
  };

  return (
    <Container id="contact">
      <Title>Contact Me</Title>
      <Desc>
        Got a question? Send me a message, and I'll get back to you soon.
      </Desc>
      <StarCanvas />
      <Wrapper>
        <ContactForm onSubmit={onSubmit}>
          {/* Hidden inputs required by Web3Forms */}
          <input
            type="hidden"
            name="access_key"
            value="7ab813cd-dc68-475f-bf39-f0094778f9d5" // Replace with your actual access key
          />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission"
          />

          <ContactTitle>
            Get in Touch <PiShareNetworkBold />
          </ContactTitle>
          <ContactSubtitle>I'd love to hear from you!</ContactSubtitle>

          <ContactInfoWrapper>
            <InfoBox>
              <IconWrapper>
                <FiPhone />
              </IconWrapper>
              <ContentBox>
                <Label>Phone</Label>
                <Value>+91 7045773441</Value>
              </ContentBox>
            </InfoBox>

            <InfoBox>
              <IconWrapper>
                <FiMail />
              </IconWrapper>
              <ContentBox>
                <Label>Email</Label>
                <Value>rupeshpanchal509@gmail.com</Value>
              </ContentBox>
            </InfoBox>
          </ContactInfoWrapper>

          <InputWrapper>
            <StyledInput
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
              autoComplete="name"
            />
          </InputWrapper>

          <InputWrapper>
            <StyledInput
              type="email"
              placeholder="Your Email"
              name="from_email"
              required
              autoComplete="email"
            />
          </InputWrapper>

          <InputWrapper>
            <StyledTextarea
              placeholder="Message"
              name="message"
              rows={6}
              required
            />
          </InputWrapper>

          <ContactButton type="submit">
            <FiSend /> Send Message
          </ContactButton>

          {result.message && (
            <ResultMessage success={result.success}>
              {result.message}
            </ResultMessage>
          )}

          <SectionDivider />

          <ConnectSection>
            <ConnectTitle>
              <ConnectIcon />
              Connect With Me
            </ConnectTitle>

            <ConnectCard
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={28} />
              <CardLabel>
                Let's Connect
                <span>on LinkedIn</span>
              </CardLabel>
            </ConnectCard>

            <ConnectCard
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={28} />
              <CardLabel>
                GitHub
                <span>on GitHub</span>
              </CardLabel>
            </ConnectCard>
          </ConnectSection>
        </ContactForm>

        {/* Connect With Me Section */}
      </Wrapper>
    </Container>
  );
};

export default Contact;
