// ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
