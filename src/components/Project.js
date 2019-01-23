import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectData from './../data/projects';

class Project extends Component {
  constructor(props) {
    super(props);

    const project = projectData.find( project => {
      return project.slug === this.props.match.params.slug
    });

    this.state = { project: project };

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section class="project">
        <div className="close-project">
          <Link to="/"><img src="../../assets/icons/close.png" alt="close"></img></Link>
        </div>
        <section id="project-details">
          <h1 className="project-title xs-text-padding">{this.state.project.title}</h1>
          <li className='project-skills-list xs-text-padding'>
            {this.state.project.skills.map( (skill,index) =>
              <ul className='project-skill xs-text-padding' key={index}>{skill}</ul>
            )}
          </li>
          <li>{
              this.state.project.info.map( (info,index) =>
              <div className="project-section" key={index}>
                <p className="project-blurb xs-text-padding">{info.body}</p>
                <img className="project-image" src={info.image} alt={info.alt} />
              </div>
              )
          }</li>
        </section>
      </section>
    );
  }
}

export default Project;
