import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectData from "./../data/projects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: projectData };
  }

  render() {
    return (
      <section id="projects">
        {this.state.projects.map((project, index) => (
          <div className="project-preview" key={index}>
            <div className="project-description xs-text-padding">
              <h1>{project.title}</h1>
              <li className="project-skills-list">
                {project.skills.map((skill, index) => (
                  <ul className="project-skill" key={index}>
                    {skill}
                  </ul>
                ))}
              </li>
              <p>{project.intro}</p>
              <div className="project-link">
                <Link
                  to={`/project/${project.slug}`}
                  key={index}
                  className="see-more"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="project-cover-image">
              <img
                className="project-cover-image"
                src={project.coverImage}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Projects;
