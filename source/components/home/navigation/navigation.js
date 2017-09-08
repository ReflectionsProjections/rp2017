import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import styles from './styles.scss'

class Navigation extends Component {

    constructor() {
        super()
    }

    render() {
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
                        <NavItem eventKey={1} href="#" className="Navigation__item--active">About</NavItem>
                        <NavItem eventKey={2} href="#">Speakers</NavItem>
                        <NavItem eventKey={3} href="#">Tracks</NavItem>
                        <NavItem eventKey={4} href="#">Sponsors</NavItem>
                        <NavDropdown eventKey={5} title="More" id="basic-nav-dropdown">
                            <MenuItem eventKey={6.1}>Action</MenuItem>
                            <MenuItem eventKey={6.2}>Another action</MenuItem>
                            <MenuItem eventKey={6.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
