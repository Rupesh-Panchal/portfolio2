import React, { useRef } from "react";
import styled from "styled-components";
import { PiShareNetworkBold } from "react-icons/pi";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";
import StarCanvas from "../canvas/Stars";
import { Bio } from "../../data/constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGitconnected } from "react-icons/si";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Earth from "../canvas/Earth";

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
  margin-bottom: 40px;
`;

const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-bottom: 8px;
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
  display: flex;
  align-items: center;
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
  border: 1px solid rgba(170, 170, 170, 0.5);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #eee;
  margin-bottom: 10px;
  transition: all 0.3s ease; /* smooth hover */

  &:hover {
    transform: translateY(-4px) scale(1.03); /* lift + slight zoom */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* subtle shadow */
    border-color: #7d51cfff; /* optional border color change */
  }

  /* Optional shimmer effect on hover */
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
    pointer-events: none; /* allow clicking the card */
  }

  &:hover::before {
    animation: shimmer 1.2s forwards;
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
  color: #0077b5;
  border-radius: 10px;
  width: 38px;
  height: 38px;
`;

const GitHubIcon = styled(FaGithub)`
  color: #eee;
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
  margin-top: 20px;
`;

const ConnectIcon = styled(SiGitconnected)`
  color: #7d51cfff;
  width: 28px;
  height: 28px;
`;

const formVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MotionContactInfoWrapper = motion(ContactInfoWrapper);
const MotionInputWrapper = motion(InputWrapper);
const MotionTextareaWrapper = motion(InputWrapper);
const MotionContactButton = motion(ContactButton);
const MotionConnectSection = motion(ConnectSection);

// Contact Component
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.loading("Sending...", { id: "send" });

    emailjs
      .sendForm(
        "service_v093htb", // replace with EmailJS Service ID
        "template_sdxpusf", // replace with EmailJS Template ID
        form.current,
        "PlnRZ2Z2D-Au2ONv4" // replace with EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message Sent Successfully ✅", { id: "send" });
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong ❌", { id: "send" });
        }
      );
  };

  return (
    <Container id="contact">
      <Toaster position="top-right" reverseOrder={false} />
      <Earth />
      <Title>Contact Me</Title>
      <Desc>
        Got a question? Send me a message, and I'll get back to you soon.
      </Desc>
      <StarCanvas />
      <Wrapper>
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <ContactForm ref={form} onSubmit={sendEmail}>
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <ContactTitle>
                Get in Touch <PiShareNetworkBold />
              </ContactTitle>
              <ContactSubtitle>I'd love to hear from you!</ContactSubtitle>
            </motion.div>

            <MotionContactInfoWrapper
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <InfoBox variants={itemVariants}>
                <IconWrapper>
                  <FiPhone />
                </IconWrapper>
                <ContentBox>
                  <Label>Phone</Label>
                  <Value>+91 7045773441</Value>
                </ContentBox>
              </InfoBox>

              <InfoBox variants={itemVariants}>
                <IconWrapper>
                  <FiMail />
                </IconWrapper>
                <ContentBox>
                  <Label>Email</Label>
                  <Value>rupeshpanchal509@gmail.com</Value>
                </ContentBox>
              </InfoBox>
            </MotionContactInfoWrapper>

            <MotionInputWrapper
              variants={itemVariants} // <-- Apply here
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <StyledInput
                type="text"
                placeholder="Your Name"
                name="name"
                required
                autoComplete="name"
              />
            </MotionInputWrapper>

            <MotionInputWrapper
              variants={itemVariants} // <-- Apply here
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <StyledInput
                type="email"
                placeholder="Your Email"
                name="email"
                required
                autoComplete="email"
              />
            </MotionInputWrapper>

            <MotionTextareaWrapper
              variants={itemVariants} // <-- Apply here
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <StyledTextarea
                placeholder="Message"
                name="message"
                rows={6}
                required
              />
            </MotionTextareaWrapper>

            <MotionContactButton
              variants={itemVariants} // <-- Apply here
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              type="submit"
            >
              <FiSend /> Send Message
            </MotionContactButton>

            <SectionDivider />

            <MotionConnectSection
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
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
            </MotionConnectSection>
          </ContactForm>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Contact;
