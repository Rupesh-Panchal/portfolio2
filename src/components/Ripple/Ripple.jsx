import React, { useState, useLayoutEffect } from "react";
import { RippleContainer } from "./Ripple.styled";
import PropTypes from "prop-types";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let timeout = null;
    if (rippleCount > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(timeout);
      }, duration);
    }
    return () => clearTimeout(timeout);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ duration, color, children }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const container = event.currentTarget.getBoundingClientRect();
    const size = Math.max(container.width, container.height) * 2; // ensures full coverage
    const x = event.clientX - container.left - size / 2;
    const y = event.clientY - container.top - size / 2;
    const newRipple = { x, y, size };
    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.map((ripple, index) => (
        <span
          key={index}
          style={{
            width: ripple.size + "px",
            height: ripple.size + "px",
            top: ripple.y + "px",
            left: ripple.x + "px",
          }}
        />
      ))}
      {children}
    </RippleContainer>
  );
};

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
};

Ripple.defaultProps = {
  duration: 850,
  color: "#fff",
};

export default Ripple;
