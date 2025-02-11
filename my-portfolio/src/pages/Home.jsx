import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #0077b6;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #555;
  margin-top: 10px;
`;

const Button = styled(motion.a)`
  margin-top: 20px;
  padding: 10px 20px;
  background: #0077b6;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background: #005f8d;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Hello, I'm [Lasy Ramovha] 👋
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

