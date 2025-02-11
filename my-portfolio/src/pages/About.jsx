import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0077b6;
`;

const Text = styled(motion.p)`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

export default function About() {
  return (
    <Container>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        About Me
      </Title>
      <Text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        I am a passionate software developer specializing in React.js and front-end technologies. I love building
        beautiful, performant, and accessible applications.
      </Text>
    </Container>
  );
}
