import React from 'react';
import './ProjectCard.css';

function ProjectCard() {
  return (
    <div>
      <card className="projectCard">
        <sidebar className="sidebar">
          <h3>First Project</h3>
        </sidebar>
        <img src="././unsplashAPI.png" alt="unsplash"></img>
      </card>
    </div>
  );
}

export default ProjectCard;
