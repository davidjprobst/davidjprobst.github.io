import React, { Component } from 'react';
import experienceData from './../data/workExperience';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { workExperience: experienceData }
  }

  render() {
    return (
      <section id="resume">
        <div className="resume-section-title">
          <h3>Work Experience</h3>
        </div>
          {
            this.state.workExperience.map( (workExperience,index) =>
              <div className="resume-items" key={index}>
                <h1>{workExperience.title}</h1>
                <h5>{workExperience.date}</h5>
                <p>{workExperience.description}</p>
              </div>
            )
          }
      </section>
    );
  }
}

export default Resume;
