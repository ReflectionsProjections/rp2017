import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import styles from './styles.scss'

class Navigation extends Component {

    constructor() {
        super()
    }

    render() {

        this.scrollTo = (name) => {
            const element = document.getElementById(name);
            element.scrollIntoView();

            const scrolledY = window.scrollY;

            if(scrolledY){
                window.scroll(0, scrolledY - 100);
            }
        };

        this.linkTo = (url) => {
            window.location = url;
        };

        return(
            <div className="Navigation">
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">
                                <img className="Navigation__logo" src="../assets/svg/logo.svg" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem onClick={() => this.scrollTo('About')} eventKey={1} href="#" className="Navigation__item--active">About</NavItem>
                        <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={2} href="#Speakers">Speakers</NavItem>
                        <NavItem onClick={() => this.scrollTo('Tracks')} eventKey={3} href="#">Tracks</NavItem>
                        <NavItem onClick={() => this.scrollTo('Events')} eventKey={6} href="#">Schedule</NavItem>
                        <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={4} href="#">Sponsors</NavItem>
                        <NavItem onClick={() => this.linkTo('http://reflectionsprojections.org/signup')} eventKey={5} href="">Register</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
