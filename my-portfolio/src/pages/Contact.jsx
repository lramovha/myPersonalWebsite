import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0077b6;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

const Button = styled(motion.button)`
  padding: 10px;
  font-size: 1rem;
  background: #0077b6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #005f8d;
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Backend integration needed)");
  };

  return (
    <Container>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Contact Me
      </Title>
      <Form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <TextArea name="message" placeholder="Your Message" onChange={handleChange} required />
        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Send Message</Button>
      </Form>
    </Container>
  );
}
