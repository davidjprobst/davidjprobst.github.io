import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectData from "./../data/projects";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: projectData };
  }

  render() {
    return (
      <section id="home">
        {
          <div className="content">
            <div id="intro" className="fixed-width">
              <h1 className="xs-text-padding title">
                <span className="white-text-background">
                  My personal website
                </span>
              </h1>

              <h3 className="xs-text-padding">
                <span className="white-text-background">
                  This is a website where I share stuff. Work and play.
                </span>
              </h3>
              {
                <Link to="/about" class="about-link xs-text-padding">
                  Read full bio{" "}
                </Link>
              }
            </div>

            <div id="recent-projects">
              {this.state.projects.map((project, index) => (
                <div className="project-preview" key={index}>
                  <div className="project-description xs-text-padding">
                    <h2>{project.title}</h2>
                    <li className="project-skills-list">
                      {project.skills.map((skill, index) => (
                        <ul className="project-skill" key={index}>
                          {skill}
                        </ul>
                      ))}
                    </li>
                    <p>{project.intro}</p>
                    <div className="project-link">
                      <Link to={`/projects/${project.slug}`} key={index}>
                        See full project
                      </Link>
                    </div>
                  </div>
                  <div className="project-cover-image">
                    <img src={project.coverImage} alt={project.coverImageAlt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
        <div id="profile-links">
          <Link
            to="#"
            className="text-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photos
          </Link>
          <Link
            to={`/projects`}
            className="text-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </Link>
          <Link
            to="#"
            className="text-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Music
          </Link>
        </div>
      </section>
    );
  }
}

export default Landing;
