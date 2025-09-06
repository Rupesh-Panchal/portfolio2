import styled, { keyframes } from "styled-components";

const rippleEffect = keyframes`
  to {
    opacity: 0;
    transform: scale(1);
  }
`;

export const RippleContainer = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;

  span {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    opacity: 0.5;
    background-color: ${(props) => props.color};
    pointer-events: none;
    z-index: 0;
    animation: ${rippleEffect} ${(props) => props.duration}ms ease-out;
  }

  & > *:not(span) {
    position: relative;
    z-index: 1; /* ensures text stays on top */
  }
`;
