import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
    }

    this.setActive = this.setActive.bind(this)

  }

  setActive(e) {
    const clickedIndex = parseInt(e.target.getAttribute("index"), 10);
    this.setState({ activeIndex: clickedIndex });

    const menu = this.refs.menu;
    menu.style.display = "none";

    const hamburger = this.refs.hamburger;
    hamburger.style.display = "block";
  }

  openMenu() {
    const menu = this.refs.menu;
    menu.style.display = "block";

    const hamburger = this.refs.hamburger;
    hamburger.style.display = "none";
  }

  render() {
    return(
      <div>
        <div id="hamburger" ref="hamburger" onClick= { () => this.openMenu() }>
          <img className="menu-btn" src="../../assets/icons/menu.png" alt="menu"></img>
        </div>
        <section ref="menu" id="menu">
          <Link
            to ='/'
            className={ this.state.activeIndex===1 ? 'active-link' :'inactive-link' }
            index={1}
            onClick = { this.setActive }>
            Home
          </Link>
          <Link
            to ='/about'
            className={ this.state.activeIndex===0 ? 'active-link' : 'inactive-link' }
            index={0}
            onClick = { this.setActive }>
            About
          </Link>
          <Link
            to ='/projects'
            className={ this.state.activeIndex===2 ? 'active-link' : 'inactive-link' }
            index={2}
            onClick = { this.setActive }>
            Projects
          </Link>
          <Link
            to ='/resume'
            className={ this.state.activeIndex===3 ? 'active-link' : 'inactive-link' }
            index={3}
            onClick = { this.setActive }>
            Resume
          </Link>
        </section>
        <nav id='default-nav'>
          <Link
            to ='/'
            className={ this.state.activeIndex===1 ? 'active-link' :'inactive-link' }
            index={1}
            onClick = { this.setActive }>
            Home
          </Link>
          <Link
            to ='/about'
            className={ this.state.activeIndex===0 ? 'active-link' : 'inactive-link' }
            index={0}
            onClick = { this.setActive }>
            About
          </Link>
          <Link
            to ='/projects'
            className={ this.state.activeIndex===2 ? 'active-link' : 'inactive-link' }
            index={2}
            onClick = { this.setActive }>
            Projects
          </Link>
          <Link
            to ='/resume'
            className={ this.state.activeIndex===3 ? 'active-link' : 'inactive-link' }
            index={3}
            onClick = { this.setActive }>
            Resume
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
