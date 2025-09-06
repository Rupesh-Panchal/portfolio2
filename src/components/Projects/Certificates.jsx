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
  gap: 50px;
  align-items: center;
  justify-items: center;

  transform: translateX(-40px); /* shift left like Skills */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-left: 70px;
    margin-top: -50px;
    transform: translateX(0);
  }
`;

const Card = styled.div`
  width: 600px;
  min-height: 300px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  position: relative;

  cursor: pointer;
  overflow: hidden;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 250px;
  }

  @media (max-width: 500px) {
    width: 95%;
    min-height: 220px;
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
  border-radius: 12px;
  margin-bottom: 12px;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  color: #6e63f2;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 900px) {
    font-size: 15px;
  }
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
  max-width: 90%;
  max-height: 90%;
  position: relative;
`;

const ModalImage = styled.img`
  width: 800px; /* fixed width */
  height: 600px;
  border-radius: 10px;

  @media (max-width: 900px) {
    width: 95%;
    height: auto; /* fallback for smaller screens */
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
