import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0077b6;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background: #0077b6;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background: #005f8d;
  }
`;

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/lramovha/repos")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 5))) // Get only the latest 5 repos
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <Container>
      <Title>My GitHub Projects</Title>
      <ProjectList>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>
                {project.description || "No description available."}
              </ProjectDescription>
              <LinkButton href={project.html_url} target="_blank">
                View on GitHub
              </LinkButton>
            </ProjectCard>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </ProjectList>
    </Container>
  );
}
