import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
        <div className="App">
          <section>
            <Route path="/projects/:slug" component={Project} />
          </section>
          <div id="container">
            <aside>
              <Nav />
            </aside>
            <main>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
            </main>
          </div>
        </div>
    );
  }
}

export default App;
