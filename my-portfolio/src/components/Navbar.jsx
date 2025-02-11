// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  background: rgba(11, 11, 13, 0.9); /* Slightly more transparent background */
  backdrop-filter: blur(10px); /* Adds a blur effect */
  border-bottom: 1px solid rgba(0, 255, 255, 0.2); /* Neon blue border */
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: #00FFFF; /* Neon blue text */
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Orbitron', sans-serif; /* Futuristic font */
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #9D00FF; /* Electric purple on hover */
    text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #00FFFF; /* Neon blue underline */
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
}
