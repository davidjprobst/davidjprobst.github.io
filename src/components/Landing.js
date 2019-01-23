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
            <h1 className='xs-text-padding title'><span className='white-text-background'>David Probst is a digital product designer from Chicago.</span></h1>
            <div id='home-image'>
              <img src='/assets/images/home-image.jpeg'></img>
            </div>
            <h3 className='xs-text-padding'><span className='white-text-background'>David has had the opportunity to work with a range of companies - from Fortune 500 corporations to early stage start ups - helping to take their product vision to development.</span></h3>
            <h3 className='xs-text-padding'><span className='white-text-background'>He has experience designing responsive web products, iOS apps, conversational interfaces, and design systems.</span></h3>
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
                    <Link to={`/projects/${project.slug}`} key={index}>See full project ></Link>
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
          <a className="icon-link" href="//www.linkedin.com/in/davidjprobst/" target="_blank">
            <img src="../../assets/icons/linkedin.png" alt="LinkedIn Icon" />
          </a>
          <a className="icon-link" href="//dribbble.com/_davidprobst" target="_blank">
            <img src="../../assets/icons/dribbble.png" alt="Dribbble Icon" />
          </a>
          <a className="icon-link" href="//github.com/davidjprobst/" target="_blank">
            <img src="../../assets/icons/github.png" alt="GitHub Icon" />
          </a>
        </div>
      </section>
    );
  }
}

export default Landing;
