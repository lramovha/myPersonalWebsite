import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 30px;
  text-align: center;
  background-color: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  font-family: 'Orbitron', sans-serif;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  word-wrap: break-word;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 255, 255, 0.4);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #00ffff;
  color: #1a1a1a;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #00b3b3;
    transform: scale(1.1);
  }
`;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [pinnedProjects, setPinnedProjects] = useState([]);

  useEffect(() => {
    const pinnedRepoNames = [
      "INF2011S_Systems_design_and_dev_II",
      "alphabet_book_kotlin",
      "MarketSummaryDashboard"
    ]; // Replace with your actual pinned repo names

    fetch("https://api.github.com/users/lramovha/repos?per_page=50")
      .then((res) => res.json())
      .then((data) => {
        const sortedRepos = data
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)); // Sort by recent activity

        const pinned = sortedRepos.filter((repo) =>
          pinnedRepoNames.includes(repo.name)
        );

        const otherRepos = sortedRepos.filter(
          (repo) => !pinnedRepoNames.includes(repo.name)
        );

        setPinnedProjects(pinned);
        setProjects(otherRepos.slice(0, 10)); // Show the 10 most recent non-pinned repos
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <Container>
      <Title>My GitHub Projects</Title>
      <ProjectList>
        {pinnedProjects.map((project) => (
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
        ))}

        {projects.map((project) => (
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
        ))}
      </ProjectList>
    </Container>
  );
}



