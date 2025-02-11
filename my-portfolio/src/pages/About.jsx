import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Container for the About section
const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 50px;
  text-align: center;
  background-color: #0b0b0d;  // Dark background for the space theme
  color: #00FFFF;  // Neon blue text color
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
`;

// Title style
const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #00FFFF;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5);
`;

// Text style
const Text = styled(motion.p)`
  font-size: 1.2rem;
  color: #9d00ff; // Electric purple color for the text
  line-height: 1.6;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px rgba(157, 0, 255, 0.8), 0 0 20px rgba(157, 0, 255, 0.5);
`;

// Background stars
const StarsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/stardust.png') repeat;
  z-index: -1; // Behind content
  opacity: 0.2; // Subtle effect
`;

// About Component
export default function About() {
  return (
    <Container>
      <StarsBackground />
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        About Me
      </Title>
      <Text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        I am a passionate software developer specializing in React.js and front-end technologies. I love building
        beautiful, performant, and accessible applications. My mission is to create seamless user experiences while
        exploring the endless possibilities of web development in a vast digital universe.
      </Text>
    </Container>
  );
}
