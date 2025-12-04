import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectData from './../data/projects';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: projectData };
  }

  render() {
    return (
      <section id="home">
        {
        <div className='content'>
          <div id='intro' className="fixed-width">
            <h1 className='xs-text-padding title'><span className='white-text-background'>Taking the internet back</span></h1>
            <div id='home-image'>
              <img src='/assets/images/home-image.jpeg' alt="Profile"></img>
            </div>
            <h3 className='xs-text-padding'><span className='white-text-background'>The internet is not what it once was. Call me nostalgic, call me a luddite. What used to be a place to learn and share has turned into a marketplace to steal and sell our attention.</span></h3>
            <h3 className='xs-text-padding'><span className='white-text-background'>This is my personal website where I control what I share and how I share it.</span></h3>
            {/*} <Link to='/about' class='about-link xs-text-padding'>Read full bio ></Link> */}
          </div>

          <div id='recent-projects'>
            {
              this.state.projects.map( (project,index) =>
              <div className='project-preview' key={index}>
                <div className='project-description xs-text-padding'>
                  <h2>{project.title}</h2>
                  <li className='project-skills-list'>
                    {project.skills.map( (skill,index) =>
                      <ul className='project-skill' key={index}>{skill}</ul>
                    )}
                  </li>
                  <p>{project.intro}</p>
                  <div className='project-link'>
                    <Link to={`/projects/${project.slug}`} key={index}>See full project</Link>
                  </div>
                </div>
                <div className='project-cover-image'>
                  <img src = {project.coverImage} alt={project.coverImageAlt} />
                </div>
              </div>
            )}
          </div>
        </div>
        }
        <div id="profile-links">
          <a className="text-link" href="#" target="_blank" rel="noopener noreferrer">
            Photos
          </a>
          <a className="text-link" href="#" target="_blank" rel="noopener noreferrer">
            Projects
          </a>
          <a className="text-link" href="#" target="_blank" rel="noopener noreferrer">
            Music
          </a>
        </div>
      </section>
    );
  }
}

export default Landing;
