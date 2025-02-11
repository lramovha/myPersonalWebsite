import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: #0B0B0D; // Dark background
  color: #00FFFF; // Neon blue text
  overflow: hidden;
  position: relative;
`;

const StarsBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #0B0B0D 0%, #0F0F12 70%); // Dark gradient background
  z-index: 0;
`;

const Star = styled(motion.div)`
  position: absolute;
  background-color: ${({ color }) => color || "white"};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  pointer-events: none; // Make sure stars don't block other interactions
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: #00FFFF; // Neon blue text
  font-family: 'Orbitron', sans-serif; // Futuristic font
  z-index: 1;
`;

const Subtitle = styled(motion.p)`
  font-size: 2rem;
  color: #9D00FF; // Electric purple text
  margin-top: 10px;
  font-family: 'Orbitron', sans-serif; // Futuristic font
  z-index: 1;
`;

const Button = styled(motion.a)`
  margin-top: 20px;
  padding: 15px 30px;
  background: #00FFFF; // Neon blue background
  color: #0B0B0D; // Dark text
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 10px;
  font-family: 'Orbitron', sans-serif; // Futuristic font
  z-index: 1;
  &:hover {
    background: #9D00FF; // Electric purple on hover
    color: #00FFFF; // Neon blue text
  }
`;

const generateStars = (numStars) => {
  const stars = [];
  const colors = ["white", "cyan", "magenta", "yellow", "lime", "aqua", "purple", "red", "orange"];
  
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 4 + 2; // Random star size between 2px and 6px
    const left = Math.random() * window.innerWidth; // Random position on the x-axis
    const top = Math.random() * window.innerHeight; // Random position on the y-axis
    const color = colors[Math.floor(Math.random() * colors.length)];
    const speed = Math.random() * 2 + 1; // Random speed for movement

    stars.push({
      size,
      left,
      top,
      color,
      speed,
    });
  }

  return stars;
};

export default function Home() {
  const stars = generateStars(300); // Number of stars to generate

  return (
    <Container>
      <StarsBackground>
        {stars.map((star, index) => (
          <Star
            key={index}
            color={star.color}
            size={star.size}
            style={{
              left: `${star.left}px`, // Initial random position (in px)
              top: `${star.top}px`, // Initial random position (in px)
            }}
            animate={{
              x: [star.left, star.left + Math.random() * 100 - 50, star.left], // Move left and right
              y: [star.top, star.top + Math.random() * 100 - 50, star.top],   // Move up and down
            }}
            transition={{
              duration: star.speed * 2, // Adjust the transition speed for continuous movement
              repeat: Infinity, // Loop the animation indefinitely
              repeatType: "loop", // Continuous loop
              ease: "easeInOut", // Smooth easing
            }}
          />
        ))}
      </StarsBackground>
      <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Hello,Welcome to my website.
        <br />
        I'm [Lasy Ramovha] 👋
      </Title>
      <Subtitle initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Software Developer | React.js Enthusiast
      </Subtitle>
      <Button
        href="/projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Projects
      </Button>
    </Container>
  );
}

