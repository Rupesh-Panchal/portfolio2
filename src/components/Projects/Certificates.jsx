import React, { useState } from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import { X } from "lucide-react"; // Close icon
import Tilt from "react-parallax-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-left: 100px; /* desktop shift */

  @media (max-width: 768px) {
    margin-left: 0; /* reset on mobile */
    margin-right: 0; /* reset on mobile */
  }
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

const CertificatesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: 55px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px; /* desktop gap */
  align-items: center;
  justify-items: center;

  transform: translateX(-40px); /* desktop shift */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* single column on mobile */
    gap: 30px; /* mobile gap */
    margin-left: 70px; /* mobile margin */
    margin-top: -50px; /* mobile top spacing */
    transform: translateX(0); /* reset shift */
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 450px;
  min-height: 350px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    max-width: 90%; /* mobile width */
    min-height: 300px;
  }

  @media (max-width: 500px) {
    max-width: 95%; /* smaller mobile width */
    min-height: 250px;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 25, 40, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 20px;
  font-weight: 600;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  color: #6e63f2;
  margin-bottom: 8px;
`;

const Desc = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.text_secondary};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  max-height: 90%;
  margin-top: 50px; /* desktop top spacing */

  @media (max-width: 768px) {
    margin-top: 30px; /* mobile top spacing */
  }
`;

const ModalImage = styled.img`
  width: 600px; /* fixed desktop size */
  height: 450px;
  border-radius: 10px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 90%; /* mobile width */
    height: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container id="Certificates">
      <Wrapper>
        <CertificatesContainer>
          {certificates.map((cert) => (
            <Tilt key={cert.id} options={{ max: 20, scale: 1.02, speed: 300 }}>
              <Card>
                <Image src={cert.image} alt={cert.description} />
                <Title>{cert.title}</Title>
                <Desc>{cert.description}</Desc>

                <HoverOverlay onClick={() => setSelectedImage(cert.image)}>
                  View Certificate
                </HoverOverlay>
              </Card>
            </Tilt>
          ))}
        </CertificatesContainer>
      </Wrapper>

      {selectedImage && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setSelectedImage(null)}>
              <X size={28} color="black" />
            </CloseButton>
            <ModalImage src={selectedImage} alt="Certificate" />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Certificates;
